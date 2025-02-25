import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-react'
import OnboardingScreen from "./pages/OnboardingScreen"
import Dashboard from "./pages/Dashboard"

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

function App() {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <SignedIn>
        <Dashboard />
      </SignedIn>
      <SignedOut>
        <OnboardingScreen />
      </SignedOut>
    </ClerkProvider>
  )
}

export default App

