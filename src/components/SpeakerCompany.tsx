// Company attribution belongs with the speaker's role, separate from sponsor tiers.
export function SpeakerCompany({ company = 'NVIDIA' }: { company?: 'NVIDIA' | 'AWS' }) {
  return <div className={`speaker-affiliation speaker-affiliation--${company.toLowerCase()}`}>
    <img src={company === 'AWS' ? '/assets/sponsors/aws.svg' : '/brands/nvidia.svg'} alt={company}
      width={company === 'AWS' ? 68 : 128} height={company === 'AWS' ? 40 : 26}
      loading="lazy" decoding="async" />
  </div>;
}
