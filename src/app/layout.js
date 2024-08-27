import GlobalNav from '@/components/globalNav';
import ClientWrapper from './ClientWrapper';
import '../styles/global.css';

export const metadata = {
  title: '스텔라이브',
  description:
    '스텔라이브, stellive, 버츄얼 아이돌, 스텔라, 버츄얼회사, 아이리칸나, 아야츠노유니, 강지회사, 강지, 네네코마시로, 아카네리제, 시라유키히나, 아라하시타비',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-dark scrollbar-track-primary scrollbar-thin"
    >
      <body>
        <GlobalNav />
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
