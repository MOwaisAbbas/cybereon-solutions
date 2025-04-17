"use client"
import DataTable from "@/components/DataTable";
import { useMemo } from "react";
import * as XLSX from 'xlsx';

const page = () => {

    // Example data structure
    const headers = ['Name', 'Email', 'Message'];
    const rows = [
        { id: 1, Name: 'John Smith', Email: 'john.smith@example.com', Message: 'Please review the quarterly reports.' },
        { id: 2, Name: 'Emily Johnson', Email: 'emily.j@test.org', Message: 'The meeting has been rescheduled to next Wednesday.' },
        { id: 3, Name: 'Michael Williams', Email: 'michael.w@company.net', Message: 'Your recent application has been received.' },
        { id: 4, Name: 'Sarah Brown', Email: 'sarah.brown@mail.com', Message: 'Your subscription will renew automatically.' },
        { id: 5, Name: 'David Jones', Email: 'david.jones@service.io', Message: 'We noticed unusual activity on your account.' },
        { id: 6, Name: 'Jennifer Davis', Email: 'jennifer.d@business.com', Message: 'Thank you for your recent purchase!' },
        { id: 7, Name: 'Robert Miller', Email: 'robert.m@domain.org', Message: 'Your support ticket has been resolved.' },
        { id: 8, Name: 'Jessica Wilson', Email: 'jessica.w@example.net', Message: 'Please confirm your email address.' },
        { id: 9, Name: 'Thomas Taylor', Email: 'thomas.t@mail.org', Message: 'Your payment was processed successfully.' },
        { id: 10, Name: 'Lisa Anderson', Email: 'lisa.a@test.com', Message: 'We need additional information to proceed.' },
        { id: 11, Name: 'Christopher Thomas', Email: 'chris.t@company.io', Message: 'Your account has been upgraded.' },
        { id: 12, Name: 'Amanda Jackson', Email: 'amanda.j@service.com', Message: 'Your request is being processed.' },
        { id: 13, Name: 'Matthew White', Email: 'matthew.w@example.org', Message: 'Please update your billing information.' },
        { id: 14, Name: 'Ashley Harris', Email: 'ashley.h@test.net', Message: 'Your order has been shipped.' },
        { id: 15, Name: 'Daniel Martin', Email: 'daniel.m@company.com', Message: 'We value your feedback!' },
        { id: 16, Name: 'Stephanie Clark', Email: 'stephanie.c@mail.io', Message: 'Your application is under review.' },
        { id: 17, Name: 'Kevin Lewis', Email: 'kevin.l@example.com', Message: 'Security alert: new login detected.' },
        { id: 18, Name: 'Nicole Walker', Email: 'nicole.w@test.org', Message: 'Your subscription has expired.' },
        { id: 19, Name: 'Andrew Hall', Email: 'andrew.h@company.net', Message: 'Please complete your profile setup.' },
        { id: 20, Name: 'Megan Allen', Email: 'megan.a@service.com', Message: 'Your recent transaction was declined.' },
        { id: 21, Name: 'Joshua Young', Email: 'joshua.y@mail.org', Message: 'Welcome to our service!' },
        { id: 22, Name: 'Rachel King', Email: 'rachel.k@example.net', Message: 'Important update to our terms of service.' },
        { id: 23, Name: 'Justin Wright', Email: 'justin.w@test.com', Message: 'Your account has been verified.' },
        { id: 24, Name: 'Lauren Scott', Email: 'lauren.s@company.io', Message: 'Please confirm your appointment.' },
        { id: 25, Name: 'Brandon Green', Email: 'brandon.g@service.org', Message: 'Your password has been reset.' },
        { id: 26, Name: 'Kayla Baker', Email: 'kayla.b@example.com', Message: 'Thank you for being a valued customer.' },
        {
            id: 27, Name: 'Ryan Adams', Email: 'ryan.a@test.net', Message: 'Were processing your refund.'
        },
        { id: 28, Name: 'Victoria Nelson', Email: 'victoria.n@company.com', Message: 'Your membership has been renewed.' },
        { id: 29, Name: 'Jacob Carter', Email: 'jacob.c@mail.io', Message: 'Please verify your identity.' },
        { id: 30, Name: 'Samantha Mitchell', Email: 'samantha.m@example.org', Message: 'Your request has been approved.' },
        { id: 31, Name: 'Tyler Roberts', Email: 'tyler.r@test.com', Message: 'New features are now available!' },
        { id: 32, Name: 'Hannah Phillips', Email: 'hannah.p@company.net', Message: 'Your trial period is ending soon.' },
        {
            id: 33, Name: 'Nicholas Evans', Email: 'nicholas.e@service.com', Message: 'Weve received your inquiry.'
        },
        { id: 34, Name: 'Alexis Turner', Email: 'alexis.t@mail.org', Message: 'Your account is now active.' },
        { id: 35, Name: 'James Parker', Email: 'james.p@example.com', Message: 'Please rate your recent experience.' },
        { id: 36, Name: 'Brittany Collins', Email: 'brittany.c@test.io', Message: 'Your documents have been received.' },
        {
            id: 37, Name: 'Zachary Edwards', Email: 'zachary.e@company.org', Message: 'Were experiencing high volume.'
        },
        { id: 38, Name: 'Olivia Stewart', Email: 'olivia.s@service.net', Message: 'Your payment is overdue.' },
        { id: 39, Name: 'Nathan Sanchez', Email: 'nathan.s@example.com', Message: 'Your account has been credited.' },
        { id: 40, Name: 'Taylor Morris', Email: 'taylor.m@test.com', Message: 'Please update your contact details.' },
        { id: 41, Name: 'Madison Rogers', Email: 'madison.r@company.io', Message: 'Your subscription is now active.' },
        {
            id: 42, Name: 'Cameron Reed', Email: 'cameron.r@mail.org', Message: 'Were investigating your issue.'
        },
        { id: 43, Name: 'Katherine Cook', Email: 'katherine.c@example.net', Message: 'Your request has been denied.' },
        { id: 44, Name: 'Dylan Morgan', Email: 'dylan.m@test.org', Message: 'Your application is complete.' },
        { id: 45, Name: 'Rachel Bell', Email: 'rachel.b@company.com', Message: 'Please confirm your attendance.' },
        { id: 46, Name: 'Jordan Murphy', Email: 'jordan.m@service.io', Message: 'Your account has been suspended.' },
        { id: 47, Name: 'Amber Bailey', Email: 'amber.b@example.com', Message: 'Your order is being prepared.' },
        {
            id: 48, Name: 'Austin Rivera', Email: 'austin.r@test.net', Message: 'Weve updated our privacy policy.'
        },
        { id: 49, Name: 'Courtney Cooper', Email: 'courtney.c@company.org', Message: 'Your feedback is important to us.' },
        { id: 50, Name: 'Christian Richardson', Email: 'christian.r@mail.com', Message: 'Your case has been escalated.' },
        { id: 51, Name: 'Allison Howard', Email: 'allison.h@example.io', Message: 'Please complete this short survey.' },
        { id: 52, Name: 'Ethan Ward', Email: 'ethan.w@test.com', Message: 'Your access has been granted.' },
        {
            id: 53, Name: 'Maria Torres', Email: 'maria.t@company.net', Message: 'Were experiencing technical difficulties.'
        },
        { id: 54, Name: 'Austin Peterson', Email: 'austin.p@service.org', Message: 'Your account balance is low.' },
        { id: 55, Name: 'Jasmine Gray', Email: 'jasmine.g@example.com', Message: 'Your profile has been updated.' },
        { id: 56, Name: 'Cody Ramirez', Email: 'cody.r@test.io', Message: 'Please confirm your email change.' },
        { id: 57, Name: 'Morgan James', Email: 'morgan.j@company.com', Message: 'Your ticket has been created.' },
        { id: 58, Name: 'Gabriel Watson', Email: 'gabriel.w@mail.net', Message: 'Your subscription is expiring soon.' },
        {
            id: 59, Name: 'Haley Brooks', Email: 'haley.b@example.org', Message: 'Weve made improvements to our service.'
        },
        { id: 60, Name: 'Lucas Kelly', Email: 'lucas.k@test.com', Message: 'Your recent login was successful.' },
        { id: 61, Name: 'Vanessa Sanders', Email: 'vanessa.s@company.io', Message: 'Please verify your payment method.' },
        { id: 62, Name: 'Derek Price', Email: 'derek.p@service.com', Message: 'Your account has been limited.' },
        { id: 63, Name: 'Brianna Bennett', Email: 'brianna.b@example.net', Message: 'Your membership is pending approval.' },
        {
            id: 64, Name: 'Logan Wood', Email: 'logan.w@test.org', Message: 'Were processing your documents.'
        },
        { id: 65, Name: 'Rebecca Barnes', Email: 'rebecca.b@company.com', Message: 'Your request is awaiting approval.' },
        { id: 66, Name: 'Jared Ross', Email: 'jared.r@mail.io', Message: 'Your application has been rejected.' },
        { id: 67, Name: 'Erica Henderson', Email: 'erica.h@example.com', Message: 'Please accept our sincere apologies.' },
        { id: 68, Name: 'Cory Coleman', Email: 'cory.c@test.net', Message: 'Your account has been reactivated.' },
        { id: 69, Name: 'Monica Jenkins', Email: 'monica.j@company.org', Message: 'Your subscription has been canceled.' },
        {
            id: 70, Name: 'Travis Perry', Email: 'travis.p@service.com', Message: 'Weve credited your account.'
        },
        { id: 71, Name: 'Alexandra Powell', Email: 'alexandra.p@example.io', Message: 'Your password has been changed.' },
        { id: 72, Name: 'Devin Long', Email: 'devin.l@test.com', Message: 'Please review these important changes.' },
        { id: 73, Name: 'Sabrina Hughes', Email: 'sabrina.h@company.net', Message: 'Your case has been resolved.' },
        { id: 74, Name: 'Marcus Flores', Email: 'marcus.f@mail.org', Message: 'Your payment was received.' },
        {
            id: 75, Name: 'Erika Washington', Email: 'erika.w@example.com', Message: 'Were experiencing delays.'
        },
        { id: 76, Name: 'Colton Butler', Email: 'colton.b@test.io', Message: 'Your account has been flagged.' },
        { id: 77, Name: 'Kylie Simmons', Email: 'kylie.s@company.com', Message: 'Please confirm your identity.' },
        { id: 78, Name: 'Garrett Foster', Email: 'garrett.f@service.net', Message: 'Your access has been revoked.' },
        { id: 79, Name: 'Bethany Gonzales', Email: 'bethany.g@example.org', Message: 'Your request is being reviewed.' },
        {
            id: 80, Name: 'Owen Bryant', Email: 'owen.b@test.com', Message: 'Weve updated our terms of service.'
        },
        { id: 81, Name: 'Lindsey Russell', Email: 'lindsey.r@company.io', Message: 'Your subscription is active.' },
        { id: 82, Name: 'Jake Griffin', Email: 'jake.g@mail.com', Message: 'Please verify your account details.' },
        { id: 83, Name: 'Cassandra Diaz', Email: 'cassandra.d@example.net', Message: 'Your application is incomplete.' },
        {
            id: 84, Name: 'Trevor Hayes', Email: 'trevor.h@test.org', Message: 'Weve received your complaint.'
        },
        { id: 85, Name: 'Mikayla Myers', Email: 'mikayla.m@company.com', Message: 'Your payment failed to process.' },
        { id: 86, Name: 'Blake Ford', Email: 'blake.f@service.io', Message: 'Your account is in good standing.' },
        { id: 87, Name: 'Paige Hamilton', Email: 'paige.h@example.com', Message: 'Please update your preferences.' },
        { id: 88, Name: 'Dennis Graham', Email: 'dennis.g@test.net', Message: 'Your access level has changed.' },
        {
            id: 89, Name: 'Jocelyn Sullivan', Email: 'jocelyn.s@company.org', Message: 'Were investigating the issue.'
        },
        { id: 90, Name: 'Bradley Wallace', Email: 'bradley.w@mail.com', Message: 'Your request has been processed.' },
        { id: 91, Name: 'Angelina Woods', Email: 'angelina.w@example.io', Message: 'Please confirm your subscription.' },
        { id: 92, Name: 'Riley Cole', Email: 'riley.c@test.com', Message: 'Your account has been unlocked.' },
        { id: 93, Name: 'Jillian West', Email: 'jillian.w@company.net', Message: 'Your order has been canceled.' },
        {
            id: 94, Name: 'Caleb Jordan', Email: 'caleb.j@service.org', Message: 'Weve updated our security measures.'
        },
        { id: 95, Name: 'Ariana Owens', Email: 'ariana.o@example.com', Message: 'Your payment method was updated.' },
        { id: 96, Name: 'Gavin Reynolds', Email: 'gavin.r@test.io', Message: 'Please complete your registration.' },
        { id: 97, Name: 'Miranda Fisher', Email: 'miranda.f@company.com', Message: 'Your account has been compromised.' },
        {
            id: 98, Name: 'Seth Harrison', Email: 'seth.h@mail.net', Message: 'Weve received your application.'
        },
        { id: 99, Name: 'Jacqueline Gibson', Email: 'jacqueline.g@example.org', Message: 'Your subscription is pending.' },
        { id: 100, Name: 'Connor Mcdonald', Email: 'connor.m@test.com', Message: 'Please verify your email address.' }
    ];


    const excelData = useMemo(() => {
        return rows.map(row => ({
            Name: row.Name,
            Email: row.Email,
            Message: row.Message
        }));
    }, [rows]);

    const exportToExcel = () => {
        const ws = XLSX.utils.json_to_sheet(excelData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Leads");
        XLSX.writeFile(wb, "leads-export.xlsx");
    };

    return (
        <>

            <div className="admin-header">
                <h1 className="admin-heading">Leads</h1>
                <button
                    onClick={exportToExcel}
                    className="export-xlsx-btn active"
                >
                    Export to Excel
                </button>
            </div>
            <DataTable
                headers={headers}
                rows={rows}
            />
        </>
    );
}

export default page