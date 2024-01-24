interface UserMetaData {
    name: string;
    phone: string;
    college: string;
    department: string;
}

interface UserView {
    email: string;
    raw_user_meta_data: UserMetaData;
}

interface Event {
    name: string;
	date: number;
	category: string;
}

interface UserEvent {
    user_id: string;
    event_id: string;
	payment: boolean;
    events: Event;
    user_view: UserView;
}