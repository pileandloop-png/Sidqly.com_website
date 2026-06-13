export interface ResourceContent {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: "Checklist" | "Strategy" | "Guide";
}

export const resources: ResourceContent[] = [
  {
    slug: "backlink-and-partnership-guide",
    title: "Backlink and Partnership Strategy for Islamic Charities",
    description: "A professional guide on building authoritative backlinks and sustainable digital partnerships in the nonprofit space.",
    category: "Strategy",
    content: `
      <h2>The Importance of Digital Authority</h2>
      <p>For modern Islamic organizations, digital authority isn't just about SEO; it's about establishing trust (Amanah) in a crowded digital landscape. High-quality backlinks from reputable sources signal to both search engines and donors that your organization is a verified, respected entity.</p>

      <h3>1. Building Local Partnerships</h3>
      <p>Start with organizations you already work with physically. Ensure that mosques, local community centers, and partner NGOs link to your official domain. These 'niche-relevant' links are highly valued.</p>

      <h3>2. Guest Thought Leadership</h3>
      <p>Contribute expert articles on Zakat operations, dignity-safe proof, or Islamic giving trends to established Islamic news outlets and nonprofit blogs. This establishes E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).</p>

      <h3>3. Resource Link Building</h3>
      <p>By publishing unique data reports or 'how-to' guides (like those found on Sidqly), other sites will naturally link to you as a primary source of information.</p>

      <h3>4. Directory and Aggregator Listings</h3>
      <p>Ensure your organization is listed on verified charity navigators, local business directories, and Islamic nonprofit registries.</p>
    `
  },
  {
    slug: "google-search-console-checklist",
    title: "Google Search Console: Essential Checklist for Charities",
    description: "A step-by-step checklist to ensure your charity's website is correctly indexed and performing on Google.",
    category: "Checklist",
    content: `
      <h3>Pre-Launch Verification</h3>
      <ul>
        <li>Verify Domain Ownership via DNS or HTML file.</li>
        <li>Submit primary <strong>sitemap.xml</strong> to the Sitemaps section.</li>
        <li>Check <strong>robots.txt</strong> for any accidental blocks on important pages.</li>
      </ul>

      <h3>Indexing and Performance</h3>
      <ul>
        <li>Monitor the 'Indexing' report for '404' or 'Server errors'.</li>
        <li>Use the 'URL Inspection' tool for mission-critical pages like /zakat or /qurbani.</li>
        <li>Check 'Core Web Vitals' to ensure mobile-friendly performance.</li>
      </ul>

      <h3>Ongoing Maintenance</h3>
      <ul>
        <li>Review 'Search Results' report monthly for high-performing keywords.</li>
        <li>Check 'Security & Manual Actions' to ensure the site hasn't been compromised.</li>
        <li>Monitor 'Enhancements' (Schema/Structured Data) for any errors in FAQ or Article markup.</li>
      </ul>
    `
  },
  {
    slug: "bing-webmaster-checklist",
    title: "Bing Webmaster Tools: Visibility Checklist",
    description: "Ensure your organization reaches donors using Bing, Yahoo, and DuckDuckGo through proper Webmaster setup.",
    category: "Checklist",
    content: `
      <h3>Setup and Integration</h3>
      <ul>
        <li>Import site data directly from Google Search Console for fast setup.</li>
        <li>Verify ownership using the Bing Webmaster tag.</li>
      </ul>

      <h3>Indexing Controls</h3>
      <ul>
        <li>Submit Sitemap to Bing.</li>
        <li>Use 'IndexNow' for real-time indexing of new blog articles or campaign pages.</li>
        <li>Review 'Crawl Control' to ensure Bingbot isn't taxing your server during peak Ramadan hours.</li>
      </ul>

      <h3>SEO Reports</h3>
      <ul>
        <li>Analyze the 'SEO Reports' section for automated suggestions on title tags and meta descriptions.</li>
        <li>Check 'Backlinks' to see who is linking to you within the Bing index.</li>
      </ul>
    `
  },
  {
    slug: "zakat-workflow-checklist",
    title: "The Ultimate Zakat Operational Workflow Checklist",
    description: "A 10-point checklist for organizations to ensure Zakat funds are handled with maximum transparency and religious compliance.",
    category: "Checklist",
    content: `
      <ol>
        <li><strong>Separate Intake:</strong> Do you have distinct forms or fields for Zakat vs. Sadaqah?</li>
        <li><strong>Eligibility Review:</strong> Is every case reviewed by a qualified team member or Mufti?</li>
        <li><strong>Manual Approval Gates:</strong> Are there at least two sets of eyes on every disbursement?</li>
        <li><strong>Bank Separation:</strong> Are Zakat funds kept in a logically or physically separate account?</li>
        <li><strong>Case Aging:</strong> Are you tracking how long Zakat funds stay in your account to ensure timely distribution?</li>
        <li><strong>Dignity-Safe Proof:</strong> Is proof of disbursement collected without compromising recipient privacy?</li>
        <li><strong>Donor Confirmation:</strong> Is the donor notified specifically when their Zakat has been utilized?</li>
        <li><strong>Audit Trail:</strong> Is there a digital log of every status change from 'Pending' to 'Distributed'?</li>
        <li><strong>Board Reporting:</strong> Does leadership receive monthly summaries of Zakat fund flow?</li>
        <li><strong>Mufti Consultation:</strong> Do you have a regular cadence for reviewing difficult cases with religious scholars?</li>
      </ol>
    `
  },
  {
    slug: "qurbani-campaign-checklist",
    title: "Qurbani Campaign Readiness Checklist",
    description: "Ensure your team is ready for the peak operational demands of the Qurbani season.",
    category: "Checklist",
    content: `
      <h3>Early Season (1 Month Before Eid)</h3>
      <ul>
        <li>Confirm animal shares and pricing with all vendors.</li>
        <li>Set up the digital booking system for real-time share tracking.</li>
        <li>Prepare the certificate templates for donors.</li>
      </ul>

      <h3>Active Phase (10 Days Before Eid)</h3>
      <ul>
        <li>Monitor share availability daily to prevent over-booking.</li>
        <li>Assign specific fulfillment tasks to field teams and vendors.</li>
        <li>Train volunteers on how to capture dignity-safe proof in the field.</li>
      </ul>

      <h3>Execution & Reporting</h3>
      <ul>
        <li>Real-time tracking of slaughter and distribution status.</li>
        <li>Upload proof within 24-48 hours of distribution.</li>
        <li>Send certificates and impact links to all donors by the 4th day of Eid.</li>
      </ul>
    `
  },
  {
    slug: "ramadan-food-drive-checklist",
    title: "Ramadan Food Drive: Operational Checklist",
    description: "Manage high-volume Iftar and ration pack distributions with zero confusion.",
    category: "Checklist",
    content: `
      <ul>
        <li><strong>Vendor Verification:</strong> Are ration pack contents verified against the promised list?</li>
        <li><strong>Batch Tracking:</strong> Is each day's Iftar distribution logged as a separate batch?</li>
        <li><strong>Location Mapping:</strong> Are delivery locations clearly assigned to specific volunteer teams?</li>
        <li><strong>Digital Intake:</strong> Are ration pack recipients pre-screened to ensure aid reaches those most in need?</li>
        <li><strong>Proof of Delivery:</strong> Do volunteers use 6-digit codes or QR verification for pickup/delivery?</li>
        <li><strong>Impact Updates:</strong> Are donors receiving weekly summaries of how many families were fed?</li>
        <li><strong>Volunteer Shifts:</strong> Are shifts clearly communicated and attendance tracked?</li>
      </ul>
    `
  }
];
