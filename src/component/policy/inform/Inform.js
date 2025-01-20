import styles from "./style.module.css";

function Inform() {
  return (
    <div className={styles.container_block}>
      <div className={styles.container_title_box}>
        <b className={styles.bolt_text}>1. Information We Collect</b>
        <p>2. How We Use Your Information</p>
        <p>3. How We Share Your Information</p>
        <p>4. Data Security</p>
        <p>5. Cookies and Tracking Technologies</p>
        <p>6. Your Rights and Choices</p>
        <p>7. Third-Party Links</p>
        <p>8. Updates to This Privacy Policy</p>
      </div>

      <div className={styles.container_big_inform}>
        <div className={styles.one_inform}>
          <h1 className={styles.inform_name}>1. Information We Collect</h1>
          <p className={styles.inform_text}>
            We collect personal and non-personal information to provide you with
            a personalized and efficient experience. The types of information we
            may collect include:
          </p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>Personal Information:</span>Your name, email address,
                phone number, mailing address, payment information, and other
                details necessary to fulfill our services.
              </li>
              <li>
                <span>Project Information:</span>
                Design preferences, floor plans, photos, and any details
                specific to your interior design project.
              </li>
              <li>
                <span>Non-Personal Information:</span>
                Browsing data, IP address, device information, and website usage
                analytics.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.two_inform}>
          <h1 className={styles.inform_name}>2. How We Use Your Information</h1>
          <p className={styles.inform_text}>
            We use the information we collect for the following purposes:
          </p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>Service Provision:</span>To provide and manage interior
                design services, including project management and communication.
              </li>
              <li>
                <span>Customer Support:</span>
                To respond to inquiries, send updates on projects, and provide
                support related to our services.
              </li>
              <li>
                <span>Personalization:</span>
                To offer design recommendations, product suggestions, and other
                content tailored to your preferences.
              </li>
              <li>
                <span>Marketing Communications:</span> With your consent, we may
                send you newsletters, promotions, and updates related to our
                services.
              </li>
              <li>
                <span>Improvement of Services:</span>
                To analyze data and improve the functionality and performance of
                our website and services.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.three_inform}>
          <h1 className={styles.inform_name}>
            3. How We Share Your Information
          </h1>
          <p className={styles.inform_text}>
            We do not sell, trade, or rent your personal information to third
            parties. However, we may share your information with:
          </p>

          <div className={styles.personal_box}>
            <ul className={styles.personal_ul}>
              <li>
                <span>Service Providers:</span>Trusted third parties who assist
                in delivering our services, such as payment processors,
                contractors, and vendors.
              </li>
              <li>
                <span> Legal Requirements:</span>
                When required by law, or in response to valid legal processes,
                we may disclose your information.
              </li>
              <li>
                <span>Business Transfers:</span>
                In the event of a merger, acquisition, or sale of our business,
                your information may be transferred as part of the business
                assets.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.four_inform}>
          <h1 className={styles.inform_name}>4. Data Security</h1>
          <p className={styles.inform_text}>
            We take reasonable measures to protect your information from
            unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission over the Internet or method of
            electronic storage is 100% secure, and we cannot guarantee absolute
            security.
          </p>
        </div>

        <div className={styles.five_inform}>
          <h1 className={styles.inform_name}>
            5. Cookies and Tracking Technologies
          </h1>
          <p className={styles.inform_text}>
            We use cookies and similar tracking technologies to enhance your
            experience on our website. These technologies help us understand how
            users interact with our website and provide features such as saving
            your preferences. You can modify your browser settings to refuse
            cookies, but doing so may limit the functionality of our website.
          </p>
        </div>

        <div className={styles.six_inform}>
          <h1 className={styles.inform_name}>6. Your Rights and Choices</h1>
          <p className={styles.inform_text}>
            You have the right to access, update, or delete your personal
            information. You can also opt-out of receiving marketing
            communications by following the unsubscribe link in our emails or by
            contacting us directly
          </p>
        </div>

        <div className={styles.seven_inform}>
          <h1 className={styles.inform_name}>7. Third-Party Links</h1>
          <p className={styles.inform_text}>
            Our website may contain links to third-party websites or services.
            We are not responsible for the privacy practices or content of these
            websites. We encourage you to review the privacy policies of any
            third-party websites you visit.
          </p>
        </div>

        <div className={styles.eight_inform}>
          <h1 className={styles.inform_name}>
            8. Updates to This Privacy Policy
          </h1>
          <p className={styles.inform_text}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. The updated policy
            will be posted on this page with the effective date at the top. We
            encourage you to review this policy periodically.
          </p>
        </div>

        <div className={styles.nine_inform}>
          <h1 className={styles.inform_name}>Contact Us</h1>
          <p className={styles.inform_text}>
            If you have any questions about this Privacy Policy or our data
            practices, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Inform;
