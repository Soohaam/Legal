import React, { useState } from 'react';
import './LawyerMatchmaking.css'; // Create a CSS file for styling
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const lawyers = {
    criminal: [
      { name: 'Rajesh Sharma', experience: '10 years', contact: 'rajesh.sharma@criminalattorneys.in' },
      { name: 'Neha Gupta', experience: '8 years', contact: 'neha.gupta@legaldefense.com' },
      { name: 'Amit Verma', experience: '12 years', contact: 'amit.verma@justiceforall.co' },
      { name: 'Suman Bhatia', experience: '7 years', contact: 'suman.bhatia@legalpractice.in' },
      { name: 'Vikram Singh', experience: '15 years', contact: 'vikram.singh@lawyersonline.org' },
      { name: 'Priya Mehta', experience: '9 years', contact: 'priya.mehta@lawandorder.com' },
      { name: 'Anil Kapoor', experience: '5 years', contact: 'anil.kapoor@criminaldefense.net' },
      { name: 'Deepika Rao', experience: '4 years', contact: 'deepika.rao@legalteam.org' },
      { name: 'Suresh Joshi', experience: '11 years', contact: 'suresh.joshi@defenselaw.co' },
      { name: 'Kavita Agarwal', experience: '6 years', contact: 'kavita.agarwal@lawnet.co.in' },
    ],
    family: [
      { name: 'Poonam Sharma', experience: '9 years', contact: 'poonam.sharma@familylaw.co.in' },
      { name: 'Rohit Sethi', experience: '6 years', contact: 'rohit.sethi@legalservices.org' },
      { name: 'Anjali Desai', experience: '10 years', contact: 'anjali.desai@familylawyers.com' },
      { name: 'Ravi Choudhury', experience: '7 years', contact: 'ravi.choudhury@legaladvice.net' },
      { name: 'Sonali Patil', experience: '5 years', contact: 'sonali.patil@familylegal.org' },
      { name: 'Karan Khanna', experience: '8 years', contact: 'karan.khanna@attorneysfamily.in' },
      { name: 'Sakshi Sharma', experience: '4 years', contact: 'sakshi.sharma@legalconsults.co' },
      { name: 'Manoj Tiwari', experience: '11 years', contact: 'manoj.tiwari@familyadvocates.com' },
      { name: 'Seema Iyer', experience: '3 years', contact: 'seema.iyer@legalaid.in' },
      { name: 'Tarun Kapoor', experience: '12 years', contact: 'tarun.kapoor@attorneysonline.org' },
    ],
    corporate: [
      { name: 'Arjun Mehra', experience: '15 years', contact: 'arjun.mehra@corporatelaw.co.in' },
      { name: 'Shweta Bansal', experience: '8 years', contact: 'shweta.bansal@bizlawyers.com' },
      { name: 'Amit Chawla', experience: '10 years', contact: 'amit.chawla@corporatelawyers.net' },
      { name: 'Rani Sharma', experience: '6 years', contact: 'rani.sharma@bizlegal.org' },
      { name: 'Mohit Agarwal', experience: '12 years', contact: 'mohit.agarwal@legalpractice.co' },
      { name: 'Neelam Singh', experience: '9 years', contact: 'neelam.singh@bizadvocates.com' },
      { name: 'Pradeep Jain', experience: '5 years', contact: 'pradeep.jain@corporateservices.in' },
      { name: 'Nikita Rao', experience: '4 years', contact: 'nikita.rao@legaladvisor.co' },
      { name: 'Vishal Kumar', experience: '11 years', contact: 'vishal.kumar@businesslaw.net' },
      { name: 'Chitra Khanna', experience: '7 years', contact: 'chitra.khanna@lawyersgroup.in' },
    ],
    civil: [
      { name: 'Dinesh Yadav', experience: '10 years', contact: 'dinesh.yadav@lawpartners.in' },
  { name: 'Anita Bhatia', experience: '9 years', contact: 'anita.bhatia@legalassociates.co' },
  { name: 'Gaurav Verma', experience: '12 years', contact: 'gaurav.verma@justicefirm.org' },
  { name: 'Priti Agarwal', experience: '8 years', contact: 'priti.agarwal@civiladvisors.com' },
  { name: 'Raj Kumar', experience: '7 years', contact: 'raj.kumar@legalsolutions.co' },
  { name: 'Kriti Joshi', experience: '6 years', contact: 'kriti.joshi@legalreforms.com' },
  { name: 'Vinay Sethi', experience: '5 years', contact: 'vinay.sethi@attorneyconnect.in' },
  { name: 'Asha Rani', experience: '4 years', contact: 'asha.rani@advocacyhub.net' },
  { name: 'Mohit Singh', experience: '11 years', contact: 'mohit.singh@legalsupport.org' },
  { name: 'Simran Kaur', experience: '3 years', contact: 'simran.kaur@jurisconsultants.in' },
],
    intellectualProperty: [
      { name: 'Arvind Patil', experience: '10 years', contact: 'arvind.patil@ipattorneys.org' },
  { name: 'Swati Iyer', experience: '9 years', contact: 'swati.iyer@trademarkadvisors.com' },
  { name: 'Kunal Gupta', experience: '12 years', contact: 'kunal.gupta@patentadvice.in' },
  { name: 'Neha Saxena', experience: '8 years', contact: 'neha.saxena@ipdefenders.org' },
  { name: 'Rahul Khanna', experience: '7 years', contact: 'rahul.khanna@copyrightlawyers.net' },
  { name: 'Simran Bansal', experience: '6 years', contact: 'simran.bansal@trademarklegal.co' },
  { name: 'Deepak Jain', experience: '5 years', contact: 'deepak.jain@innovativelawyers.com' },
  { name: 'Meera Joshi', experience: '4 years', contact: 'meera.joshi@ipconsult.in' },
  { name: 'Pranay Reddy', experience: '11 years', contact: 'pranay.reddy@ipstrategy.org' },
  { name: 'Tanvi Mehta', experience: '3 years', contact: 'tanvi.mehta@intellectualprotect.org' },
],
    immigration: [
      { name: 'Siddharth Sharma', experience: '10 years', contact: 'siddharth.sharma@immigrationlawyers.co' },
      { name: 'Nisha Agarwal', experience: '8 years', contact: 'nisha.agarwal@globalmigration.net' },
      { name: 'Rajesh Singh', experience: '12 years', contact: 'rajesh.singh@legalmigration.org' },
      { name: 'Manisha Verma', experience: '7 years', contact: 'manisha.verma@migrationexperts.co' },
      { name: 'Vikrant Mehta', experience: '6 years', contact: 'vikrant.mehta@immigrationhelp.com' },
      { name: 'Preeti Rani', experience: '5 years', contact: 'preeti.rani@visaadvocates.org' },
      { name: 'Aakash Rao', experience: '4 years', contact: 'aakash.rao@globalvisaassist.in' },
      { name: 'Maya Bhatia', experience: '11 years', contact: 'maya.bhatia@legalimmigrationhub.net' },
      { name: 'Karan Patel', experience: '3 years', contact: 'karan.patel@migrationadvisors.co' },
      { name: 'Alok Gupta', experience: '9 years', contact: 'alok.gupta@immigrationexperts.com' },
    ],
    employment: [
      { name: 'Gaurav Sharma', experience: '10 years', contact: 'gaurav.sharma@employmentlaw.org' },
  { name: 'Tina Bansal', experience: '8 years', contact: 'tina.bansal@legaljobs.net' },
  { name: 'Nitin Kumar', experience: '12 years', contact: 'nitin.kumar@workplacelawyers.co' },
  { name: 'Riya Gupta', experience: '6 years', contact: 'riya.gupta@employmentrights.co' },
  { name: 'Amit Singh', experience: '5 years', contact: 'amit.singh@labourlawhelp.com' },
  { name: 'Sakshi Sethi', experience: '7 years', contact: 'sakshi.sethi@employeelegal.co' },
  { name: 'Rohan Joshi', experience: '4 years', contact: 'rohan.joshi@hrlegaladvice.in' },
  { name: 'Neha Rani', experience: '11 years', contact: 'neha.rani@employerlawyers.org' },
  { name: 'Rahul Bhatia', experience: '3 years', contact: 'rahul.bhatia@legalworkplace.in' },
  { name: 'Simran Agarwal', experience: '9 years', contact: 'simran.agarwal@hrlawyers.net' },
],
    realEstate: [
      { name: 'Aditya Mehra', experience: '10 years', contact: 'aditya.mehra@realestatelawyers.com' },
  { name: 'Tanya Khanna', experience: '8 years', contact: 'tanya.khanna@propertylawadvisors.co' },
  { name: 'Sanjay Singh', experience: '12 years', contact: 'sanjay.singh@landlegal.org' },
  { name: 'Neeraj Gupta', experience: '6 years', contact: 'neeraj.gupta@realestateexperts.net' },
  { name: 'Ritika Sharma', experience: '5 years', contact: 'ritika.sharma@propertyrights.co' },
  { name: 'Puneet Yadav', experience: '7 years', contact: 'puneet.yadav@realtyadvisors.com' },
  { name: 'Himanshu Rao', experience: '4 years', contact: 'himanshu.rao@estatelegal.co' },
  { name: 'Sonia Bansal', experience: '11 years', contact: 'sonia.bansal@landadvisors.org' },
  { name: 'Nidhi Khurana', experience: '3 years', contact: 'nidhi.khurana@realestatesupport.net' },
  { name: 'Akash Tiwari', experience: '9 years', contact: 'akash.tiwari@propertylawyers.in' },
],
    tax: [
      { name: 'Ravi Joshi', experience: '10 years', contact: 'ravi.joshi@taxtalk.org' },
  { name: 'Priya Kapoor', experience: '8 years', contact: 'priya.kapoor@financialadvisors.com' },
  { name: 'Sandeep Gupta', experience: '12 years', contact: 'sandeep.gupta@taxadvisors.co' },
  { name: 'Kiran Mehta', experience: '6 years', contact: 'kiran.mehta@taxlegal.net' },
  { name: 'Rajesh Khanna', experience: '5 years', contact: 'rajesh.khanna@taxconsultancy.com' },
  { name: 'Anjali Sethi', experience: '7 years', contact: 'anjali.sethi@legalfinance.org' },
  { name: 'Rohit Yadav', experience: '4 years', contact: 'rohit.yadav@taxassist.co' },
  { name: 'Simran Rani', experience: '11 years', contact: 'simran.rani@financialrights.org' },
  { name: 'Nitin Bansal', experience: '3 years', contact: 'nitin.bansal@legalfintax.in' },
  { name: 'Tarun Gupta', experience: '9 years', contact: 'tarun.gupta@taxlawexperts.co' },
],
bankruptcy: [
  { name: 'Kunal Sharma', experience: '10 years', contact: 'kunal.sharma.law@gmail.com' },
  { name: 'Sakshi Gupta', experience: '8 years', contact: 'sakshi.gupta.legal@yahoo.com' },
  { name: 'Rahul Mehta', experience: '12 years', contact: 'rahul.mehta@lawfirm.com' },
  { name: 'Deepika Singh', experience: '6 years', contact: 'deepika.singh.attorney@gmail.com' },
  { name: 'Nitin Yadav', experience: '5 years', contact: 'nitin.yadav.lawyer@outlook.com' },
  { name: 'Neha Sharma', experience: '7 years', contact: 'neha.sharma@legalservices.com' },
  { name: 'Rohit Choudhury', experience: '4 years', contact: 'rohit.choudhury@attorney.com' },
  { name: 'Vikas Rani', experience: '11 years', contact: 'vikas.rani@lawoffice.com' },
  { name: 'Ankita Joshi', experience: '3 years', contact: 'ankita.joshi.legal@gmail.com' },
  { name: 'Sandeep Bansal', experience: '9 years', contact: 'sandeep.bansal@lawyers.com' },
],
personalInjury: [
  { name: 'Ajay Kumar', experience: '10 years', contact: 'ajay.kumar.lawfirm@gmail.com' },
  { name: 'Nisha Jain', experience: '8 years', contact: 'nisha.jain@legalhelp.com' },
  { name: 'Tarun Patil', experience: '12 years', contact: 'tarun.patil@injurylaw.com' },
  { name: 'Komal Singh', experience: '6 years', contact: 'komal.singh.attorney@yahoo.com' },
  { name: 'Vikrant Mehta', experience: '5 years', contact: 'vikrant.mehta.law@gmail.com' },
  { name: 'Anjali Reddy', experience: '7 years', contact: 'anjali.reddy@injurylawyers.com' },
  { name: 'Saurabh Bansal', experience: '4 years', contact: 'saurabh.bansal@legaladvice.com' },
  { name: 'Poonam Joshi', experience: '11 years', contact: 'poonam.joshi@lawyer.com' },
  { name: 'Karan Singh', experience: '3 years', contact: 'karan.singh.legal@gmail.com' },
  { name: 'Rita Kapoor', experience: '9 years', contact: 'rita.kapoor@lawservices.com' },
],
environmental: [
  { name: 'Meera Sharma', experience: '10 years', contact: 'meera.sharma.environmental@gmail.com' },
  { name: 'Rajesh Verma', experience: '8 years', contact: 'rajesh.verma@eco-law.com' },
  { name: 'Aditi Singh', experience: '12 years', contact: 'aditi.singh@environmentlawyers.com' },
  { name: 'Nitin Joshi', experience: '6 years', contact: 'nitin.joshi.environment@law.com' },
  { name: 'Suman Patil', experience: '5 years', contact: 'suman.patil@ecolaw.com' },
  { name: 'Kavita Rani', experience: '7 years', contact: 'kavita.rani@greenlaw.com' },
  { name: 'Vikas Bansal', experience: '4 years', contact: 'vikas.bansal@environmentallaw.com' },
  { name: 'Anuradha Agarwal', experience: '11 years', contact: 'anuradha.agarwal@lawfirm.com' },
  { name: 'Raj Kumar', experience: '3 years', contact: 'raj.kumar.eco@gmail.com' },
  { name: 'Deepika Jain', experience: '9 years', contact: 'deepika.jain@environmentlaw.com' },
],
healthcare: [
  { name: 'Nidhi Gupta', experience: '10 years', contact: 'nidhi.gupta.healthlaw@gmail.com' },
  { name: 'Kiran Mehta', experience: '8 years', contact: 'kiran.mehta@healthlaw.com' },
  { name: 'Ashish Agarwal', experience: '12 years', contact: 'ashish.agarwal@healthcarelaw.com' },
  { name: 'Shreya Joshi', experience: '6 years', contact: 'shreya.joshi@healthlawyers.com' },
  { name: 'Ravi Khanna', experience: '5 years', contact: 'ravi.khanna@medicallaw.com' },
  { name: 'Neha Sethi', experience: '7 years', contact: 'neha.sethi@healthlaw.com' },
  { name: 'Amit Yadav', experience: '4 years', contact: 'amit.yadav@medlaw.com' },
  { name: 'Sonal Sharma', experience: '11 years', contact: 'sonal.sharma@healthlaw.com' },
  { name: 'Rajesh Rani', experience: '3 years', contact: 'rajesh.rani.healthlaw@gmail.com' },
  { name: 'Tanya Bansal', experience: '9 years', contact: 'tanya.bansal@healthlaw.com' },
],
contract: [
  { name: 'Alok Sharma', experience: '10 years', contact: 'alok.sharma.contractlaw@gmail.com' },
  { name: 'Pooja Gupta', experience: '8 years', contact: 'pooja.gupta@contractlaw.com' },
  { name: 'Mohit Verma', experience: '12 years', contact: 'mohit.verma@contractlawfirm.com' },
  { name: 'Sonia Iyer', experience: '6 years', contact: 'sonia.iyer@contractlaw.com' },
  { name: 'Karan Singh', experience: '5 years', contact: 'karan.singh.contractlaw@gmail.com' },
  { name: 'Rita Kapoor', experience: '7 years', contact: 'rita.kapoor@contractlaw.com' },
  { name: 'Anjali Joshi', experience: '4 years', contact: 'anjali.joshi.contractlaw@gmail.com' },
  { name: 'Rohit Bansal', experience: '11 years', contact: 'rohit.bansal@contractlaw.com' },
  { name: 'Neha Agarwal', experience: '3 years', contact: 'neha.agarwal.contractlaw@gmail.com' },
  { name: 'Shivam Yadav', experience: '9 years', contact: 'shivam.yadav@contractlaw.com' },
],
litigation: [
  { name: 'Rajendra Mehta', experience: '10 years', contact: 'rajendra.mehta.litigation@gmail.com' },
  { name: 'Aditi Gupta', experience: '8 years', contact: 'aditi.gupta@litigationlaw.com' },
  { name: 'Kiran Bansal', experience: '12 years', contact: 'kiran.bansal@litigationfirm.com' },
  { name: 'Sonal Agarwal', experience: '6 years', contact: 'sonal.agarwal@litigationlawyers.com' },
  { name: 'Neha Joshi', experience: '5 years', contact: 'neha.joshi@litigationlaw.com' },
  { name: 'Arvind Sharma', experience: '7 years', contact: 'arvind.sharma.litigation@gmail.com' },
  { name: 'Priya Rani', experience: '4 years', contact: 'priya.rani@litigationlaw.com' },
  { name: 'Vikas Gupta', experience: '11 years', contact: 'vikas.gupta@litigationfirm.com' },
  { name: 'Meena Patel', experience: '3 years', contact: 'meena.patel.litigation@gmail.com' },
  { name: 'Amit Singh', experience: '9 years', contact: 'amit.singh@litigationlaw.com' },
],
elderLaw: [
  { name: 'Ajay Kumar', experience: '10 years', contact: 'ajay.kumar.elderlaw@gmail.com' },
  { name: 'Suman Rani', experience: '8 years', contact: 'suman.rani@elderlaw.com' },
  { name: 'Kiran Sharma', experience: '12 years', contact: 'kiran.sharma@elderlawfirm.com' },
  { name: 'Neeta Gupta', experience: '6 years', contact: 'neeta.gupta@elderlawyers.com' },
  { name: 'Tanya Verma', experience: '5 years', contact: 'tanya.verma@elderlaw.com' },
  { name: 'Rohit Yadav', experience: '7 years', contact: 'rohit.yadav.elderlaw@gmail.com' },
  { name: 'Nisha Khanna', experience: '4 years', contact: 'nisha.khanna@elderlaw.com' },
  { name: 'Deepika Singh', experience: '11 years', contact: 'deepika.singh@elderlaw.com' },
  { name: 'Ravi Patel', experience: '3 years', contact: 'ravi.patel.elderlaw@gmail.com' },
  { name: 'Vikas Agarwal', experience: '9 years', contact: 'vikas.agarwal@elderlaw.com' },
],
sports: [
  { name: 'Vikram Mehta', experience: '10 years', contact: 'vikram.mehta.sportslaw@gmail.com' },
  { name: 'Tanya Kapoor', experience: '8 years', contact: 'tanya.kapoor@sportslawyers.com' },
  { name: 'Rajesh Sharma', experience: '12 years', contact: 'rajesh.sharma@sportslaw.com' },
  { name: 'Sanjay Rani', experience: '6 years', contact: 'sanjay.rani@sportslawfirm.com' },
  { name: 'Neha Singh', experience: '5 years', contact: 'neha.singh@athletelaw.com' },
  { name: 'Deepak Joshi', experience: '7 years', contact: 'deepak.joshi@sportslawyer.com' },
  { name: 'Aditi Sharma', experience: '4 years', contact: 'aditi.sharma@sportslegal.com' },
  { name: 'Riya Bansal', experience: '11 years', contact: 'riya.bansal@sportslaw.com' },
  { name: 'Akash Gupta', experience: '3 years', contact: 'akash.gupta@sportlawyers.com' },
  { name: 'Vikas Khanna', experience: '9 years', contact: 'vikas.khanna@sportslawfirm.com' },
],
  };

function LawyerMatchmaking() {
  const [selectedField, setSelectedField] = useState('');
  const [matchedLawyers, setMatchedLawyers] = useState([]);

  const handleFieldChange = (e) => {
    const field = e.target.value;
    setSelectedField(field);
    if (field) {
      setMatchedLawyers(lawyers[field]);
    } else {
      setMatchedLawyers([]);
    }
  };
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <button
      onClick={() => navigate(-1)}
      className="fixed top-16 left-12 flex items-center px-4 py-2 border-2 border-[#000000] bg-[#2d2f4e] text-white rounded-lg shadow-md hover:bg-[#383861] transition"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </button>
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-3xl w-full text-white">
        <h1 className="text-4xl font-bold mb-8 text-center">Lawyer Matchmaking</h1>
        <label htmlFor="lawyer-field" className="text-lg block mb-4 text-gray-300">Select Field of Law:</label>
        <select
          id="lawyer-field"
          value={selectedField}
          onChange={handleFieldChange}
          className="w-full p-3 rounded-lg border-none bg-gray-700 text-white text-lg mb-6 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all appearance-none"
        >
          <option value="">--Select--</option>
          {["criminal", "family", "corporate", "civil", "intellectualProperty", "immigration", "employment", "realEstate", "tax", "bankruptcy", "personalInjury", "environmental", "healthcare", "contract", "litigation", "elderLaw", "sports"].map((field) => (
            <option key={field} value={field} className="text-black">{field.replace(/([A-Z])/g, ' $1')}</option>
          ))}
        </select>
  
        <div className="mt-6 text-left max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {matchedLawyers.length > 0 ? (
            <ul className="space-y-4">
              {matchedLawyers.map((lawyer, index) => (
                <li
                  key={index}
                  className="bg-gray-700 p-6 rounded-lg shadow-lg hover:bg-gray-600 transition-all duration-300 border-l-4 border-green-500"
                >
                  <h2 className="text-xl font-semibold mb-2 text-white">{lawyer.name}</h2>
                  <p className="text-lg text-gray-200">Experience: {lawyer.experience}</p>
                  <p className="text-lg text-gray-200">
                    Contact:{" "}
                    <a
                      href={`mailto:${lawyer.contact}`}
                      className="text-green-400 hover:underline hover:text-green-300 transition-colors duration-200"
                    >
                      {lawyer.contact}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-lg text-gray-400 text-center">Please select a field to see available lawyers.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default LawyerMatchmaking;
