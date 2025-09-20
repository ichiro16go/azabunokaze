type announcements = {
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    isImportant: boolean;
}

type events = {
    id: string;
    title: string;
    'date-time': Date;
    status: string;
    location: string;
    participants: number;
    description: string;
}

type activityReports={
    id: string;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    hasImages: boolean;
}

type companies={
    id: number;
    name: string;
    industry: string;
    location: string;
    description: string;
    isPartner: boolean;
}
