import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'

const LAST_UPDATED = 'April 11, 2026'

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="section bg-navy">
          <div className="section-padding">
            <div className="text-center text-white">
              <h1 className="heading-1 mb-6">Privacy Policy</h1>
              <p className="text-xl max-w-3xl mx-auto text-light-blue leading-8">
                How we collect, use, and protect your personal information in compliance with GDPR and Kenya Data Protection Act 2019.
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
                  <h2 className="heading-2 mb-4">1. Information We Collect</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We collect information you provide directly to us, such as when you:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fill out our contact forms or request a demo</li>
                      <li>Subscribe to our newsletter</li>
                      <li>Apply for a position at MylesCorp</li>
                      <li>Create an account for our products</li>
                      <li>Contact our customer support team</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">2. How We Use Your Information</h2>
                  <div className="space-y-4 body-text">
                    <p>We use the information we collect to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Communicate with you about products, services, and promotional offers</li>
                      <li>Monitor and analyze trends and usage</li>
                      <li>Detect, investigate, and prevent security incidents and fraud</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">3. Information Sharing</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent,
                      except as described in this policy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>With service providers who assist us in operating our business</li>
                      <li>With your consent for specific purposes</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect and defend the rights or property of MylesCorp</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">4. Data Security</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We implement appropriate technical and organizational measures to protect your personal information
                      against unauthorized access, alteration, disclosure, or destruction. These include:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>SSL/TLS encryption for data in transit</li>
                      <li>Secure managed hosting infrastructure</li>
                      <li>Regular security assessments and updates</li>
                      <li>Employee access controls and training</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">5. Your Rights</h2>
                  <div className="space-y-4 body-text">
                    <p>Under GDPR and Kenya Data Protection Act, you have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Request deletion of your information</li>
                      <li>Object to processing of your information</li>
                      <li>Request data portability</li>
                      <li>Withdraw consent at any time</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">6. Cookies and Tracking</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We use cookies and similar tracking technologies to enhance your experience on our website.
                      You can control cookies through your browser settings.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">7. International Data Transfers</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      Your personal information may be transferred to and processed in countries other than Kenya.
                      We ensure appropriate safeguards are in place for such transfers.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">8. Children's Privacy</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      Our services are not intended for children under 18. We do not knowingly collect personal
                      information from children under 18.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">9. Changes to This Policy</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      We may update this privacy policy from time to time. We will notify you of any changes
                      by posting the new policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="heading-2 mb-4">10. Contact Us</h2>
                  <div className="space-y-4 body-text">
                    <p>
                      If you have any questions about this Privacy Policy, please contact us:
                    </p>
                    <div className="bg-off-white p-6 rounded-[1.4rem] border border-light-grey shadow-soft">
                      <p><strong>Email:</strong> privacy@mylescorptech.com</p>
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
              <h2 className="heading-2 mb-4">Questions About Your Privacy?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Our team is here to help with any privacy concerns or questions about your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button>Contact Privacy Team</Button>
                <Button variant="secondary">Download Data Policy</Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
