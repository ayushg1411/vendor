import React from 'react';

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Help</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <h2 className="text-xl font-bold mb-4">FAQs</h2>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How do I create an account?</h3>
          <p className="text-gray-600">To create an account, click on the "Sign Up" button on the top right corner of the page and follow the instructions.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How do I reset my password?</h3>
          <p className="text-gray-600">To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email.</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold mb-2">How can I contact support?</h3>
          <p className="text-gray-600">You can contact support by emailing support@example.com or by filling out the contact form on our website.</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
