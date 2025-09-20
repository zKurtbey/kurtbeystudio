import Header from "./Header";
import ShadowCluesApp from "./ShadowCluesApp";

export default function ShadowClues() {
  return (
    <>
      <Header />
      <main>
        <ShadowCluesApp />
        <div className="information">
          <h1
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            Privacy Policy - Shadow Clues
          </h1>

          <div className="desc">
            <h2>Information We Collect</h2>
            <div className="desc">
              <p>
                We do <strong>not</strong> collect any data from users.
              </p>
            </div>
            <h2>Security</h2>
            <div className="desc">
              <p
                style={{
                  margin: 0,
                  padding: 0,
                }}
              >
                We take reasonable measures to keep your information safe within
                the app.
              </p>
            </div>
            <h2>Contact</h2>
            <div className="desc">
              <p>
                If you have any questions about your privacy, contact us at:
                kurtbey@phibonacci.app
              </p>
            </div>
          </div>
        </div>
        <div className="information">
          <h1
            style={{
              margin: 0,
              padding: 0,
            }}
          >
            Support
          </h1>

          <div className="desc">
            <h2>Contact Informations</h2>
            <div className="desc">
              <p>You can contact us from:</p>
              <ul>
                <li>Mail: kurtbey@phibonacci.app</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
