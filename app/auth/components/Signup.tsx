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

const FormSchema = z
    .object({
        email: z
            .string()
            .email({ message: "Must be a valid email address." }),
        password: z.string().min(3, {
            message: "Password must be at least 3 characters.",
        }),
        confirm_password: z.string(),
        name: z.string().min(3, {
            message: "Name must be at least 3 characters.",
        }),
		phone: z.string().min(10, {
			message: "Phone number must be 10 characters.",
		}).max(10, {
			message: "Phone number must be 10 characters.",
		})
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirm_password) {
            // Issue a custom error for the confirm_password field
            ctx.addIssue({
                path: ["confirm_password"], // Path of the field to which the error should be attached
                message: "Passwords must match.", // Custom error message
                code: "custom", // Error code
            });
        }
    });


export function SignUp() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
			confirm_password: "",
			name: "",
			phone: ""
        },
    });
    const router = useRouter();

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        const { data:res, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
				data: {
					name: data.name,
					phone: data.phone,
                },
            },
        });
        if (error) {
            toast({
                duration: 2000,
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-red-600 p-4">
                        <code className="text-white">{JSON.stringify(error.message)}</code>
                    </pre>
                ),
            });
        } else if (res) {
            toast({
				duration: 100000,
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-green-600 p-4">
                        <code className="text-white">
                            Sign up success. <br />
                            Check your email for verification.
                        </code>
                    </pre>
                ),
            });
            router.push("/auth");
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="John Doe"
                                    type="text"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>WhatsApp Number</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="9876543210"
                                    type="number"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <FormField
                    control={form.control}
                    name="confirm_password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
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
