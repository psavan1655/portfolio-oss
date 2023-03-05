import ProfileData from '@/data/profile-data.json'

const formatMessage = (string: keyof typeof ProfileData): string => {
    return ProfileData[string]
}

export default formatMessage