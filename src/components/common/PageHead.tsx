import Head from "next/head";

import ProfileData from "@/data/profile-data.json";

interface PageHeadProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const PageHead: React.FC<PageHeadProps> = ({
  title,
  description,
  ogTitle,
  ogUrl,
  ogImage,
  ogType,
}) => {
  if (!title) {
    title = ProfileData.headTitle;
  }

  if (!description) {
    description = ProfileData.headDescription;
  }

  if (!ogTitle) {
    ogTitle = ProfileData.ogTitle;
  }
  if (!ogUrl) {
    ogUrl = ProfileData.ogUrl;
  }
  if (!ogImage) {
    ogImage = ProfileData.ogImage;
  }
  if (!ogType) {
    ogType = ProfileData.ogType;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content={ogTitle} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
    </Head>
  );
};

export default PageHead;
