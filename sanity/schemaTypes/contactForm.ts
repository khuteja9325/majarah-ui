import { Rule } from 'sanity';

// sanity/schemaTypes/contact.ts
interface ContactFormField {
    name: string;
    title: string;
    type: string;
    validation?: (Rule: Rule) => Rule;
    of?: Array<{ type: string }>;
    initialValue?: () => string;
    readOnly?: boolean;
}

interface ContactFormSchema {
    name: string;
    title: string;
    type: string;
    fields: ContactFormField[];
}

const contactFormSchema: ContactFormSchema = {
    name: 'organizationContact',
    title: 'Organization Contact Submissions',
    type: 'document',
    fields: [
        {
            name: 'contactType',
            title: 'Contact Type',
            type: 'string',
            initialValue: () => 'organization',
            readOnly: true
        },
        {
            name: 'businessName',
            title: 'Business Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'businessType',
            title: 'Business Type',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().email()
        },
        {
            name: 'countryCode',
            title: 'Country Code',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule: Rule) => Rule.required()
        },
        
        {
            name: 'selectedDate',
            title: 'Date of Submission',
            type: 'datetime'
        },
        {
            name: 'primaryInterest',
            title: 'Primary Interest',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (Rule: Rule) => Rule.required().min(1)
        },
        {
            name: 'otherInterests',
            title: 'Other Interests',
            type: 'text',
            validation: (Rule: Rule) => Rule.max(500)
        },
        
        {
            name: 'inquiry',
            title: 'Inquiry Details',
            type: 'text',
            validation: (Rule: Rule) => Rule.required().max(2000)
        },
        {
            name: 'budget',
            title: 'Budget (Monthly)',
            type: 'string',
            validation: (Rule: Rule) => Rule.min(0)
        },
        {
            name: 'businessSize',
            title: 'Business Size',
            type: 'string'
        },
        {
            name: 'yearsInBusiness',
            title: 'Years in Business',
            type: 'string'
        },
        {
            name: 'preferredCallTime',
            title: 'Preferred Call Time',
            type: 'string'
        },
        {
            name: 'referralSource',
            title: 'Referral Source',
            type: 'string',
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            readOnly: true
        }
    ]
};

export default contactFormSchema;