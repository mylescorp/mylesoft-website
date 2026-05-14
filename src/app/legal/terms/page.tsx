import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'

const LAST_UPDATED = 'April 11, 2026'

export default function TermsOfService() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Terms of Service</h1>
              <p className="text-xl max-w-3xl mx-auto text-light-blue leading-8">
                Terms and conditions governing your use of MylesCorp Technologies' website and services.
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section">
          <div className="section-padding max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <div>
                  <h2 className="heading-2 mb-4">1. Acceptance of Terms</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      By accessing and using MylesCorp Technologies' website and services, you accept and agree
                      to be bound by the terms and provision of this agreement.
                    </p>
                    <p>
                      If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">2. Description of Service</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      MylesCorp Technologies provides AI-powered software solutions for Education, Healthcare,
                      Agriculture, and Business sectors across East Africa. Our services include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Software as a Service (SaaS) products</li>
                      <li>Professional consulting and implementation services</li>
                      <li>Technical support and maintenance</li>
                      <li>Training and onboarding services</li>
                      <li>Custom development solutions</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">3. User Accounts</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      When you create an account with us, you must provide information that is accurate,
                      complete, and current at all times. Failure to do so constitutes a breach of the Terms.
                    </p>
                    <p>
                      You are responsible for safeguarding the password that you use to access the Service
                      and for any activities or actions under your password.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">4. Payment Terms</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      For paid services, you agree to pay all fees incurred in connection with your account.
                      Payment is due in advance for subscription services.
                    </p>
                    <p>
                      All prices are quoted in Kenyan Shillings (KSh) unless otherwise specified.
                      Prices are subject to change with 30 days notice.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">5. Intellectual Property Rights</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      The Service and its original content, features and functionality are and will remain
                      the exclusive property of MylesCorp Technologies Limited.
                    </p>
                    <p>
                      You may not modify, publish, transmit, reverse engineer, participate in the transfer
                      or sale, create derivative works, or in any way exploit any of the content, in whole
                      or in part, found on the Service.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">6. User Data and Privacy</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      Your privacy is important to us. Please review our Privacy Policy, which also governs
                      your use of the Service, to understand our practices.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">7. Termination</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We may terminate or suspend your account and bar access to the service immediately,
                      without prior notice or liability, under our sole discretion, for any reason whatsoever
                      and without limitation.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">8. Limitation of Liability</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      In no event shall MylesCorp Technologies Limited, its directors, employees, partners,
                      agents, suppliers, or affiliates be liable for any indirect, incidental, special,
                      consequential, or punitive damages.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">9. Service Availability</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We strive to maintain the Service availability but do not guarantee uninterrupted access.
                      We may perform maintenance, updates, or changes to the Service periodically.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">10. Governing Law</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      These Terms shall be interpreted and governed by the laws of the Republic of Kenya
                      without regard to its conflict of law provisions.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">11. Changes to Terms</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
                      If a revision is material, we will provide at least 30 days notice prior to any new terms
                      taking effect.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">12. Contact Information</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <p><strong>Email:</strong> legal@mylescorptech.com</p>
                      <p><strong>Phone:</strong> +254 743 993 715</p>
                      <p><strong>Address:</strong> Wester Heights, Westlands, Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-light-grey">
                <p className="small-text text-medium-grey">
                  Last updated: {LAST_UPDATED}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Have Questions?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Our legal team is here to help clarify any terms or answer your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Legal Team</Button>
                <Button variant="secondary">Download Terms PDF</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
