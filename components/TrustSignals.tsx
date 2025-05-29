import { ShieldCheckIcon, LockClosedIcon, UserGroupIcon } from '@heroicons/react/24/outline'

export default function TrustSignals() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">
        Why Choose QuoteLinker?
      </h3>
      
      <div className="space-y-3">
        <div className="trust-badge">
          <ShieldCheckIcon className="h-5 w-5 text-primary-600" />
          <span>Licensed Minneapolis Insurance Agents</span>
        </div>
        
        <div className="trust-badge">
          <LockClosedIcon className="h-5 w-5 text-primary-600" />
          <span>Secure & Confidential Information</span>
        </div>
        
        <div className="trust-badge">
          <UserGroupIcon className="h-5 w-5 text-primary-600" />
          <span>Trusted by 1,000+ Minneapolis Families</span>
        </div>
      </div>
      
      <div className="pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-4">
          <img
            src="/images/ssl-badge.svg"
            alt="SSL Secure"
            className="h-8 w-auto"
          />
          <img
            src="/images/trustpilot-badge.svg"
            alt="Trustpilot Verified"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  )
} 