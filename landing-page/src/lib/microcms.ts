export async function fetchAnnouncements() {
    const serviceId = process.env.MICROCMS_SERVICE_ID;
    const apiKey = process.env.MICROCMS_API_KEY;
    const endpoint = `https://${serviceId}.microcms.io/api/v1/announcements`;

    const res = await fetch(endpoint, {
        headers: {
            'X-API-KEY': apiKey ?? '',
        },
        
    });

    if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`Failed to fetch announcements: ${res.status} ${res.statusText} - ${errorText}`);
    }
    return res.json();
}


export async function fetchEvents() {
    const serviceId = process.env.MICROCMS_SERVICE_ID;
    const apiKey = process.env.MICROCMS_API_KEY;
    const endpoint = `https://${serviceId}.microcms.io/api/v1/events`;
    const res = await fetch(endpoint, {
        headers: {
            'X-API-KEY': apiKey ?? '',
        },
        
    }); 
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch events: ${res.status} ${res.statusText} - ${errorText}`);
    }
    return res.json();
}

export async function fetchActivityReports() {
    const serviceId = process.env.MICROCMS_SERVICE_ID;
    const apiKey = process.env.MICROCMS_API_KEY;
    const endpoint = `https://${serviceId}.microcms.io/api/v1/reports`;
    const res = await fetch(endpoint, {
        headers: {
            'X-API-KEY': apiKey ?? '',
        },
        
    }); 
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch events: ${res.status} ${res.statusText} - ${errorText}`);
    }
    return res.json();
}

export async function fetchCompanies() {
    const serviceId = process.env.MICROCMS_SERVICE_ID;
    const apiKey = process.env.MICROCMS_API_KEY;
    const endpoint = `https://${serviceId}.microcms.io/api/v1/companies`;
    const res = await fetch(endpoint, {
        headers: {
            'X-API-KEY': apiKey ?? '',
        },
        
    }); 
    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch companies: ${res.status} ${res.statusText} - ${errorText}`);
    }
    return res.json();
}

