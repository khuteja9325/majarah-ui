'use client';
import { useRef, useState, forwardRef } from 'react';
import Select, { StylesConfig } from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarDays } from 'lucide-react';
import { sanityClient } from '@/sanity/lib/sanityClient';
import { Button } from './ui/button';
import { countries, CustomOption, CustomSingleValue } from './countries';
import { ReactNode } from "react";

const businessSizeOptions = [
  { value: "small", label: <span>Small</span> },
  { value: "medium", label: <span>Medium</span> },
  { value: "large", label: <span>Large</span> },
];

const businessTypeOptions = [
  { value: "government", label: <span>Government</span> },
  { value: "private", label: <span>Private</span> },
];

const yearsInBusinessOptions = [
  { value: "less_than_2", label: <span>Less than 2 years</span> },
  { value: "5_10_years", label: <span>5–10 years</span> },
  { value: "10_plus", label: <span>10+ years</span> },
  { value: "not_established", label: <span>Not established yet</span> },
];

const callTimeOptions = [
  { value: "morning", label: <span>Morning (9 AM – 12 PM)</span> },
  { value: "afternoon", label: <span>Afternoon (12 PM – 3 PM)</span> },
  { value: "evening", label: <span>Evening (3 PM – 6 PM)</span> },
  { value: "anytime", label: <span>Anytime</span> },
];

const interestedOptions = [
  'Branding & Graphic Design',
  'Social Media Management',
  'Online Marketing Campaign',
  'Video Production & Photography',
  'Influencer Marketing',
  'Website Design',
  'Paid Ads & Performance Marketing',
  'Events Management',
  'Copywriting',
  'SEO & Analytics',
];

const CustomInput = forwardRef<HTMLInputElement, any>(({ value, onClick }, ref) => (
  <div className="relative w-full">
    <input
      ref={ref}
      value={value}
      onClick={onClick}
      readOnly
      className="w-full border border-gray-600 rounded px-3 py-2 bg-transparent text-lg placeholder:text-gray-400 pr-10"
      placeholder="Select date"
    />
    <CalendarDays className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
  </div>
));
CustomInput.displayName = 'CustomInput';

const customStyles: StylesConfig<{ label: ReactNode; value: string }, false> = {
  control: (base) => ({
    ...base,
    background: 'transparent',
    minHeight: '48px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    color: 'white',
    fontSize: '1.125rem',
  }),
  menu: (base) => ({
    ...base,
    background: '#0e0e0e',
    borderRadius: '4px',
    border: '1px solid #ffffff',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    fontSize: '1.125rem',
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '200px',
    overflowY: 'auto',
    paddingTop: 0,
    paddingBottom: 0,
  }),
  option: (base, state) => ({
    ...base,
    background: state.isSelected ? 'transparent' : 'transparent',
    ':hover': {
      background: '#277cb5ff',
      color: 'white',
    },
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
    color: 'white',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  input: (base) => ({
    ...base,
    color: 'white',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  placeholder: (base) => ({
    ...base,
    color: '#ccc',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: '#ffffff',
  }),
};

type OrganizationFormData = {
  businessName: string;
  businessType: string;
  fullName: string;
  email: string;
  phone: string;
  countryCode: string;
  selectedDate: Date | null;
  inquiry: string;
  referralSource: string;
  businessSize: string;
  yearsInBusiness: string;
  primaryInterest: string[];
  otherInterests: string;
  preferredCallTime: string;
  budget: string;
};

type RequiredField = 'businessName' | 'businessType' | 'fullName' | 'email' | 'phone' | 'selectedDate' | 'inquiry';

export default function OrganizationContactForm() {
  const [formData, setFormData] = useState<OrganizationFormData>({
    businessName: '',
    businessType: '',
    fullName: '',
    email: '',
    phone: '',
    countryCode: countries[184].value,
    selectedDate: null,
    inquiry: '',
    referralSource: '',
    businessSize: businessSizeOptions[0].value,
    yearsInBusiness: '',
    primaryInterest: [],
    otherInterests: '',
    preferredCallTime: '',
    budget: '',
  });
  const [dateKey, setDateKey] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const requiredFields: RequiredField[] = ['businessName', 'businessType', 'fullName', 'email', 'phone', 'selectedDate', 'inquiry'];
    const newErrors: Record<string, string> = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = 'Required';
    });
    
    // Validate primaryInterest array
    if (formData.primaryInterest.length === 0) {
      newErrors.primaryInterest = 'Please select at least one option';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const submissionData = {
        ...formData,
        selectedDate: formData.selectedDate ? new Date(formData.selectedDate).toISOString() : null,
        submittedAt: new Date().toISOString(),
        contactType: 'organization',
      };

      const [sanityResponse, emailResponse] = await Promise.allSettled([
        sanityClient.create({
          _type: 'organizationContact',
          ...submissionData,
        }),
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(submissionData),
        }),
      ]);

      if (sanityResponse.status === 'fulfilled' && emailResponse.status === 'fulfilled' && emailResponse.value.ok) {
        alert('Message sent successfully!');
      } else {
        if (sanityResponse.status === 'rejected') console.error('Sanity submission failed:', sanityResponse.reason);
        if (emailResponse.status === 'rejected' || (emailResponse.status === 'fulfilled' && !emailResponse.value.ok)) console.error('Email sending failed');
        alert('Message sent successfully!');
      }

      setFormData({
        businessName: '',
        businessType: '',
        fullName: '',
        email: '',
        phone: '',
        countryCode: countries[184].value,
        selectedDate: null,
        inquiry: '',
        referralSource: '',
        businessSize: '',
        yearsInBusiness: '',
        primaryInterest: [],
        otherInterests: '',
        preferredCallTime: '',
        budget: '',
      });
      setDateKey(prev => prev + 1);
    } catch (error) {
      console.error(error);
      alert('Submission failed. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-20 bg-[linear-gradient(to_bottom,_#4899E3_-130%,_transparent_30%)] border border-[#55A1E7] shadow-[0_0_30px_3px_#55A1E7] max-w-2xl mx-auto p-4 space-y-10 rounded-lg font-poppins text-white text-lg font-semibold"
    >
      <h1 className="text-3xl">Let our business help yours.</h1>
      <p className="text-white-800 text-lg font-light mb-6">We want to hear from you.</p>

      <label className="block mb-1">Name of Business *</label>
      <input 
        name="businessName" 
        value={formData.businessName} 
        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })} 
        placeholder="Business Name" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />
      {errors.businessName && <p className="text-red-500 text-sm mt-1">{errors.businessName}</p>}

      
      <label className="block mb-1">Business Type *</label>
      <Select
        options={businessTypeOptions}
        styles={customStyles}
        value={formData.businessType ? businessTypeOptions.find(opt => opt.value === formData.businessType) : null}
        onChange={(val) => setFormData({ ...formData, businessType: val ? val.value : '' })}
        placeholder="Select business type"
        isClearable={false}
      />
      {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}


      <label className="block mb-1">Full Name *</label>
      <input 
        name="fullName" 
        value={formData.fullName} 
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} 
        placeholder="Full Name" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />
      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}

      <label className="block mb-1">Email *</label>
      <input 
        name="email" 
        type="email" 
        value={formData.email} 
        onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
        placeholder="Email" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}

      <label className="block mb-1">Phone *</label>
      <div className="flex gap-2">
        <Select 
          options={countries} 
          styles={customStyles} 
          value={countries.find(c => c.value === formData.countryCode)} 
          onChange={(val) => val && setFormData({ ...formData, countryCode: val.value })} 
          className="w-2/3 text-white" 
          isSearchable={true}
          components={{
            Option: CustomOption,
            SingleValue: CustomSingleValue
          }}
        />
        <input 
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        name="phone" 
        value={formData.phone} 
        onChange={(e) => {
          const value = e.target.value;
          if (/^\d*$/.test(value)) {
            setFormData({ ...formData, phone: value });
          }
        }} 
        placeholder="Phone" 
        className="w-2/3 border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <label className="block mb-1">Date of Submission *</label>
      <DatePicker
        key={dateKey}
        selected={formData.selectedDate}
        onChange={(date) => setFormData({ ...formData, selectedDate: date })}
        customInput={<CustomInput />}
      />
      {errors.selectedDate && <p className="text-red-500 text-sm mt-1">{errors.selectedDate}</p>}

      <label className="block mb-1">I am interested in *</label>
      <div className="space-y-2 border border-gray-600 rounded px-3 py-2 bg-transparent">
        {interestedOptions.map((option) => (
          <label key={option} className="flex items-center cursor-pointer hover:bg-gray-800/20 px-2 py-1 rounded transition-colors">
            <input
              type="checkbox"
              checked={formData.primaryInterest.includes(option)}
              onChange={() => {
                setFormData((prev) => ({
                  ...prev,
                  primaryInterest: prev.primaryInterest.includes(option)
                    ? prev.primaryInterest.filter((item) => item !== option)
                    : [...prev.primaryInterest, option],
                }));
              }}
              className="mr-3 w-4 h-4 text-[#5AA5E9] bg-transparent border-gray-600 rounded focus:ring-[#5AA5E9] focus:ring-2 focus:ring-offset-0"
            />
            <span className="text-white text-lg font-light">{option}</span>
          </label>
        ))}
      </div>
      {errors.primaryInterest && (
        <p className="text-red-500 text-sm mt-1">{errors.primaryInterest}</p>
      )}

      <label className="block mb-1">Other Interests</label>
      <input 
        name="otherInterests" 
        value={formData.otherInterests} 
        onChange={(e) => setFormData({ ...formData, otherInterests: e.target.value })} 
        placeholder="Please specify any other interests not listed above" 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">Inquiry Details *</label>
      <textarea 
        name="inquiry" 
        value={formData.inquiry} 
        onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />
      {errors.inquiry && <p className="text-red-500 text-sm mt-1">{errors.inquiry}</p>}

      <label className="block mb-1">Budget (AED) - Monthly or per project </label>
      <input 
        name="budget" 
        type="number" 
        value={formData.budget} 
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <label className="block mb-1">Business Size</label>
      <Select 
        options={businessSizeOptions} 
        styles={customStyles} 
        value={formData.businessSize ? businessSizeOptions.find(opt => opt.value === formData.businessSize) : null}
        onChange={(val) => setFormData({ ...formData, businessSize: val ? val.value : '' })} 
        placeholder="Select business size"
        isClearable={false}
      />

      <label className="block mb-1">Years in Business</label>
      <Select 
        options={yearsInBusinessOptions} 
        styles={customStyles} 
        value={formData.yearsInBusiness ? yearsInBusinessOptions.find(opt => opt.value === formData.yearsInBusiness) : null}
        onChange={(val) => setFormData({ ...formData, yearsInBusiness: val ? val.value : '' })} 
        placeholder="Select years in business"
        isClearable={false}
      />

      <label className="block mb-1">What is the best time to call you?</label>
      <Select 
        options={callTimeOptions} 
        styles={customStyles} 
        value={formData.preferredCallTime ? callTimeOptions.find(opt => opt.value === formData.preferredCallTime) : null}
        onChange={(val) => setFormData({ ...formData, preferredCallTime: val ? val.value : '' })} 
        placeholder="Select preferred call time"
        isClearable={false}
      />

      <label className="block mb-1">Where did you hear about us?</label>
      <input 
        name="referralSource" 
        value={formData.referralSource} 
        onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })} 
        className="w-full border border-gray-600 rounded px-3 py-2 text-lg font-light" 
      />

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-[150px] text-white h-[45px] mx-auto block mb-10 border border-[#5AA5E9] bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </Button>
    </form>
  );
} 