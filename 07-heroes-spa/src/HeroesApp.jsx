import { AuthProvider } from "./auth"
import { AppRputer } from "./router/AppRputer"


export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRputer />
        </AuthProvider>
    )
}
