import { SignIn } from "@clerk/clerk-react"
import EventifyLogo from "../components/OnboardingScreenComponents/EventifyLogo"
import EventifyDescription from "../components/OnboardingScreenComponents/EventifyDescription"
import BackgroundAnimation from "../components/OnboardingScreenComponents/BackgroundAnimation"
import ImageCarousel from "../components/OnboardingScreenComponents/ImageCarousel"
import balloonGuy from "../assets/balloon-guy.png"
import "./OnboardingScreen.css"

function OnboardingScreen() {
  return (
    <div className="onboarding-screen">
      <ImageCarousel />
      <BackgroundAnimation />
      <div className="content-wrapper">
        <div className="left-section">
          <div className="logo-container">
            <img src={balloonGuy} alt="Balloon Guy" className="balloon-guy-image" />
            <EventifyLogo />
          </div>
          <EventifyDescription />
        </div>
        <div className="right-section">
          <SignIn 
            appearance={{
              elements: {
                formButtonPrimary: {
                  backgroundColor: "var(--color-primary)",
                  "&:hover": { backgroundColor: "var(--color-accent)" }
                },
                card: {
                  background: "transparent",
                  border: "none",
                  boxShadow: "none",
                },
                headerTitle: {
                  color: "var(--color-text)",
                  fontSize: "2rem"
                },
                headerSubtitle: {
                  color: "var(--color-muted)"
                },
                formFieldLabel: {
                  color: "var(--color-text)"
                },
                formFieldInput: {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--color-text)",
                  "&:focus": {
                    border: "1px solid var(--color-primary)",
                    outline: "none"
                  }
                },
                footerActionLink: {
                  color: "var(--color-secondary)"
                },
                dividerLine: {
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                },
                dividerText: {
                  color: "var(--color-muted)"
                },
                socialButtonsBlockButton: {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  color: "var(--color-text)",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default OnboardingScreen

