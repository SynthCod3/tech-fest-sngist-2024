import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data: notes } = await supabase.from("notes").select();

    return (<div>
		<pre>{JSON.stringify(notes, null, 2)}</pre>
		<div>{(await supabase.auth.getUser()).data.user?.email}</div>
		</div>
		);
}