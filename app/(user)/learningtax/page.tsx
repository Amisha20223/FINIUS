// pages/tax-info.tsx
import Head from 'next/head';
import React from 'react';

const TaxInfo: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Tax Information in India</title>
        <meta name="description" content="Detailed guide about tax system in India" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-8 py-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Tax Information in India</h1>

        {/* Introduction to Taxes */}
        <section className="mt-6">
          <h2 className="text-3xl font-semibold text-teal-300">Introduction to Taxes</h2>
          <p className="mt-4">
            Taxes are mandatory financial charges or some other type of levy imposed on a taxpayer (an individual or legal entity) by a governmental organization in order to fund government spending and various public expenditures. 
          </p>
        </section>
        {/* Types of Taxes */}
        <section className="mt-12 mb-6">
          <h2 className="text-3xl font-semibold text-pink-800">Types of Taxes in India</h2>
          <p className="mt-4">Heres a breakdown of the main categories of taxes:</p>
          <ul className="list-disc list-inside">
            <li><strong>Direct Taxes:</strong>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Income Tax:</strong> Charged on the income of individuals, companies, and other entities. The tax rates are progressive, increasing with higher income brackets.</li>
                <li><strong>Corporate Tax:</strong> Levied on the profits earned by businesses. Includes Minimum Alternate Tax (MAT) to ensure that companies pay a minimum amount of tax despite having large profits but low taxable income through exemptions.</li>
              </ul>
            </li>
            <li><strong>Indirect Taxes:</strong>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Goods and Services Tax (GST):</strong> A comprehensive, multi-stage, destination-based tax that replaced many indirect taxes in India. Levied on the supply of goods and services and collected at each stage of the production and distribution process.</li>
                <li><strong>Customs Duty:</strong> Tax on the import and export of goods.</li>
              </ul>
            </li>
            <li><strong>Other Taxes:</strong>
              <ul className="list-disc list-inside ml-4">
                <li><strong>Property Tax:</strong> Collected by municipal authorities on the value of a property.</li>
                <li><strong>Stamp Duty:</strong> Paid on the legal recognition of certain documents.</li>
              </ul>
            </li>
          </ul>
        </section>
        <h2 className="text-3xl font-semibold text-orange-800 mb-4">Key Tax Forms</h2>
          {/* Budgeting Articles */}
          <section>
          <div className="bg-pink-300 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-pink-700">Form 16:</h3>
            <p className="text-gray-700">
            A certificate issued by an employer to its employees outlining the tax deducted at source (TDS) from the salary paid.
              </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          <div className="bg-lime-300 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-lime-700">Form 26AS:</h3>
            <p className="text-gray-700">
            A consolidated tax statement that has all the details of tax deducted on behalf of the taxpayer (from salaries, interest income, etc.).
            </p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>

          <div className="bg-indigo-300 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-indigo-700">ITR Forms:</h3>
            <p className="text-gray-700">
            There are multiple forms (ITR-1 through ITR-7) based on the nature and amount of income and the type of taxpayer (individual, company, etc.).</p>
            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
          <div className="bg-cyan-300 p-2 rounded-lg shadow-md transform transition duration-500 hover:scale-105 mb-6">
            <h3 className="text-xl font-semibold mb-2 text-cyan-700">GST Forms::</h3>
            <p className="text-gray-700">
            These forms facilitate the reporting of various transactions, including sales, purchases, and tax payments, to the tax authorities. Includes GSTR-1 for outward supplies and GSTR-3B for a monthly summary</p>            <a href="#" className="text-blue-500 hover:underline">Read More</a>
          </div>
        </section>
        

        {/* Filing Tax Returns */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-lime-800">Filing Tax Returns</h2>
          <p className="mt-4">Tax returns can be filed both electronically and in paper form, but the government encourages e-filing. Here are the steps typically involved:</p>
          <ol className="list-decimal list-inside">
            <li><strong>Collect Documents:</strong> Gather all relevant income, tax deduction, and investment proof documents.</li>
            <li><strong>Calculate Total Income and Tax Liability:</strong> This includes income from various sources minus deductions and exemptions.</li>
            <li><strong>E-File Returns:</strong> Through the Income Tax Departments website or third-party software.</li>
            <li><strong>Verify Return:</strong> This can be done via an Aadhar-based OTP, net banking, or by sending a signed ITR-V form to the Central Processing Centre in Bangalore.</li>
          </ol>
        </section>

        

        

        {/* Important Deadlines */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-purple-800">Important Deadlines</h2>
          <p className="mt-4">
            Keeping track of tax deadlines is crucial for compliance:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li><strong>July 31:</strong> Deadline for filing individual income tax returns (ITR) for most taxpayers.</li>
            <li><strong>October 31:</strong> Deadline for taxpayers who are required to get their accounts audited.</li>
            <li><strong>March 31:</strong> End of the financial year, important for finalizing accounts and making tax-saving investments.</li>
          </ul>
        </section>
        {/* Reference Links Section */}
        <section className="py-8 text-pink-200">
          <h3 className="text-2xl font-bold text-center mb-4">Learn More</h3>
          <ul className="list-none text-center blue-200">
            <li className="mb-2"><a href="https://www.incometaxindia.gov.in/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Income Tax Department of India</a></li>
            <li className="mb-2"><a href="https://www.cbic.gov.in/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Central Board of Indirect Taxes and Customs</a></li>
            <li className="mb-2"><a href="https://www.gst.gov.in/" className="text-blue-400 hover:text-blue-600 transition ease-in-out duration-300">Goods and Services Tax Network (GSTN)</a></li>
          </ul>
        </section>
         

        
      </main>
    </div>
  )
}

export default TaxInfo
