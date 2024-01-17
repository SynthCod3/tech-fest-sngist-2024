import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SignIn } from "./SignIn";
import { SignUp } from "./Signup";

export function AuthComponent() {
    return (
        <Tabs defaultValue="signin" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2 h-[3.3rem] p-2">
                <TabsTrigger value="signin" className="p-2">
                    Sign in
                </TabsTrigger>
                <TabsTrigger value="password" className="p-2">
                    Sign up
                </TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold text-3xl text-center">
                            Welcome back
                        </CardTitle>
                        <CardDescription className="text-md text-center">
                            Let&apos;s sign you in to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <SignIn />
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="password">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-bold text-3xl text-center">
                            Hello there!
                        </CardTitle>
                        <CardDescription className="text-md text-center">
                            Let&apos;s create your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <SignUp />
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}