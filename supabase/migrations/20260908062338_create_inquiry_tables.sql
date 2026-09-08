/*
# Create inquiry tables for MedAxis BPO Services website

1. New Tables
- `employer_inquiries`: Stores hiring requirement submissions from employers.
  - company_name (text, not null)
  - contact_person (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - job_role (text, not null)
  - number_of_vacancies (text, not null)
  - hiring_location (text)
  - additional_requirements (text)
  - created_at (timestamptz, default now())

- `job_seeker_submissions`: Stores resume/job interest submissions from candidates.
  - full_name (text, not null)
  - email (text, not null)
  - phone (text, not null)
  - current_location (text)
  - experience (text)
  - preferred_industry (text)
  - preferred_job_role (text)
  - resume_file_name (text) — stored file name if a resume file is uploaded
  - created_at (timestamptz, default now())

- `contact_messages`: Stores general contact form submissions.
  - name (text, not null)
  - email (text, not null)
  - phone (text)
  - interest_type (text) — Employer / Job Seeker / Other
  - message (text, not null)
  - created_at (timestamptz, default now())

2. Security
- Enable RLS on all three tables.
- Allow anon + authenticated INSERT only — these are public submission forms on a no-auth corporate website.
- No SELECT/UPDATE/DELETE from the frontend; only insert is permitted to prevent data leakage.
*/

CREATE TABLE IF NOT EXISTS employer_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_person text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  job_role text NOT NULL,
  number_of_vacancies text NOT NULL,
  hiring_location text,
  additional_requirements text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE employer_inquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_employer_inquiries" ON employer_inquiries;
CREATE POLICY "anon_insert_employer_inquiries" ON employer_inquiries
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS job_seeker_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  current_location text,
  experience text,
  preferred_industry text,
  preferred_job_role text,
  resume_file_name text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_seeker_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_job_seeker_submissions" ON job_seeker_submissions;
CREATE POLICY "anon_insert_job_seeker_submissions" ON job_seeker_submissions
  FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  interest_type text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);
