import { useQuery, gql } from '@apollo/client';
import Link from 'next/link';
// import styles from './Header.module.css';

// const GET_HEADER_DATA = gql`
//   query GetHeaderData {
//     generalSettings {
//       title
//       description
//     }
//     menu(id: "primary", idType: NAME) {
//       menuItems {
//         nodes {
//           id
//           label
//           url
//           path
//         }
//       }
//     }
//   }
// `;

export default function Footer() {
//   const { data, loading, error } = useQuery(GET_HEADER_DATA);

//   if (loading) return <header className={styles.header}>Loading...</header>;
//   if (error) return <header className={styles.header}>Error: {error.message}</header>;

//   const { title } = data.generalSettings;
//   const menuItems = data.menu?.menuItems?.nodes || [];

  return (
    <footer className="w-full bg-dark-blue">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo */}
                <div className="">
                    <Link href="/">
                    <img
                        src="https://bayview.com/wp-content/uploads/2023/10/BayviewAssetManagement_Logo-1-300x116.png"
                        alt="Bayview Asset Management Logo"
                        className="w-[131px]"
                    />
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="/#learnmore">About</Link>
                        </li>
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="https://bayview.com/careers/">Careers</Link>
                        </li>
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="/#contact">Contact</Link>
                        </li>
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="https://bayview.com/legal/">Legal</Link>
                        </li>
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="https://bayview.com/privacy-policy/">Privacy Policy</Link>
                        </li>
                        <li className="text-sm uppercase text-white hover:text-gray-300">
                        <Link href="https://bayview.com/accessibility/">Accessibility</Link>
                        </li>
                    </ul>
                </nav>  
                <div>
                    <div className="copyright text-white">
                        © 2025 All Rights Reserved.
                    </div>
                </div>              
            
        </div>
    </footer>
  );
}