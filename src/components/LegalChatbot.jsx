import React from "react";
import { useState, useRef, useEffect } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LegalChatbot() {
    const [userInput, setUserInput] = useState("")
    const [messages, setMessages] = useState([])
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const chatContainerRef = useRef(null)
    const navigate = useNavigate();

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  const API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent";

  // Legal advisor prompt template
  const getLegalPrompt = (userQuestion) => `
    As a legal advisor in India using Indian laws and constitution, please provide a structured response to the following question:
    "${userQuestion}"
    
    Please format your response in the following way:
    1. Start with a brief summary of the legal issue
    2. Provide the relevant legal framework or applicable laws
    3. Break down the analysis into clear sections
    4. Conclude with practical advice or next steps
    
    Use markdown formatting:
    - Use "**" for important terms and section headings
    - Use bullet points for lists of requirements or considerations
    - Separate sections with clear headings
    - Include relevant legal citations where applicable
    
    Focus on providing accurate, practical legal information while maintaining a professional tone.
  `

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [chatContainerRef]) //Corrected dependency

  const sendMessage = async () => {
    if (!userInput.trim() || isLoading) return

    const newMessages = [...messages, { text: userInput, sender: "user" }]
    setMessages(newMessages)
    setUserInput("")
    setError(null)
    setIsLoading(true)

    try {
      const response = await axios.post(
        `${API_URL}?key=${API_KEY}`,
        {
          contents: [
            {
              role: "user",
              parts: [{ text: getLegalPrompt(userInput) }],
            },
          ],
        },
        { headers: { "Content-Type": "application/json" } },
      )

      if (response.data.candidates && response.data.candidates.length > 0) {
        const botReply = response.data.candidates[0].content.parts[0].text
        setMessages([...newMessages, { text: botReply, sender: "bot" }])
      } else {
        setError("No response from AI.")
      }
    } catch (err) {
      console.error("Error fetching response:", err)
      setError("Error fetching AI response.")
    } finally {
      setIsLoading(false)
    }
  }

  const renderFormattedMessage = (text) => {
    const formattedText = text
      .split("\n")
      .map((line, index) => {
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
        if (line.trim().startsWith("- ")) {
          return `<li class="ml-4">• ${line.substring(2)}</li>`
        }
        if (line.trim().startsWith("#")) {
          const level = line.match(/^#+/)[0].length
          const text = line.replace(/^#+\s*/, "")
          return `<h${level} class="font-bold text-lg my-2">${text}</h${level}>`
        }
        return line
      })
      .join("<br>")

    return <div dangerouslySetInnerHTML={{ __html: formattedText }} />
  }

  return (
    <div className="flex flex-col h-screen mx-4 md:mx-12 lg:mx-24 bg-gray-900 text-white">
        <button
      onClick={() => navigate(-1)}
      className="fixed top-4 left-18 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </button>
      <header className="bg-gray-800 p-4 text-center">
        <h1 className="text-2xl font-bold">⚖️ Legal Advisor</h1>
      </header>

      <main className="flex-grow flex flex-col p-4 overflow-hidden">
        {error && <div className="bg-red-500 p-2 rounded-md mb-2 text-center">{error}</div>}

        <div
          ref={chatContainerRef}
          className="flex-grow overflow-y-auto mb-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800"
        >
          {messages.length === 0 && <p className="text-gray-400 text-center italic">Ask me any legal query...</p>}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg ${
                msg.sender === "user" ? "bg-blue-600 ml-auto max-w-[80%]" : "bg-gray-700 max-w-[90%]"
              }`}
            >
              {msg.sender === "user" ? msg.text : renderFormattedMessage(msg.text)}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Type your legal question..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            onClick={sendMessage}
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </main>
    </div>
  )
}

