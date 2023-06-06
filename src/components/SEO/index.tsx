import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  name: string;
  type: string;
  keywords: string;
  href: string;
}

const SEO = ({ title, description, name, type, keywords, href }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} data-rh="true" />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={name} />
      <meta name="theme-color" content="#262626" />
      <meta name="robots" content="index, follow" />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* End Twitter tags */}
      <link rel="canonical" href={href} />
    </Helmet>
  );
};

export default SEO;
