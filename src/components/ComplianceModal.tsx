import React, { useState } from 'react';

interface ComplianceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export function ComplianceModal({ isOpen, onClose, onAccept }: ComplianceModalProps) {
  const [hasAccepted, setHasAccepted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Compliance Notice</h2>
        <div className="mb-4">
          <p className="text-gray-700 mb-2">
            Before proceeding, please review and accept our compliance terms:
          </p>
          <ul className="list-disc pl-5 text-gray-600">
            <li>You confirm that all transactions will comply with applicable laws and regulations</li>
            <li>You agree to maintain accurate records of all transactions</li>
            <li>You understand that certain transactions may require additional verification</li>
          </ul>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={hasAccepted}
              onChange={(e) => setHasAccepted(e.target.checked)}
              className="mr-2"
            />
            <span className="text-sm text-gray-700">
              I have read and agree to the compliance terms
            </span>
          </label>
        </div>
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onAccept}
            disabled={!hasAccepted}
            className={`px-4 py-2 rounded ${
              hasAccepted
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}