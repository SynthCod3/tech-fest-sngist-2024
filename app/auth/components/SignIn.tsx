"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
    email: z
        .string()
        .email({ message: "Must be a valid email address." }),
    password: z.string().min(3, {
        message: "Password must be at least 3 characters.",
    }),
});

export function SignIn() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
	const router = useRouter()

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const { data: res, error } = await supabase.auth.signInWithPassword(
            data
        );
        if (error) {
            toast({
				duration: 2000,
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-red-600 p-4">
                        <code className="text-white">{error.message}</code>
                    </pre>
                ),
            });
        } else if (res) {
			toast({
				duration: 2000,
				description: (
					<pre className="mt-2 w-[340px] rounded-md bg-green-600 p-4">
                        <code className="text-white">
                            Sign in successful.
                        </code>
                    </pre>
					
				),
			});
			router.push("/")
		}
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="john@example.com"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="••••••••"
                                    type="password"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="h-1"></div>
                <Button type="submit" className="w-full mt-2">
                    Sign in
                </Button>
            </form>
        </Form>
    );
}
