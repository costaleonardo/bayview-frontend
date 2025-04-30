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

export default function Header() {
//   const { data, loading, error } = useQuery(GET_HEADER_DATA);

//   if (loading) return <header className={styles.header}>Loading...</header>;
//   if (error) return <header className={styles.header}>Error: {error.message}</header>;

//   const { title } = data.generalSettings;
//   const menuItems = data.menu?.menuItems?.nodes || [];

  return (
    <header className="w-full bg-dark-blue font-proxima">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center py-6 px-6">
            {/* Logo */}
                <div className="">
                    <Link href="/">
                    <img
                        src="https://bayview.com/wp-content/uploads/2023/10/BayviewAssetManagement_Logo-1-300x116.png"
                        alt="Bayview Asset Management Logo"
                        className="w-[175px]"
                    />
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-8">
                        <li className="text-base font-bold uppercase text-white hover:text-gray-300">
                            <Link href="https://bayview.com/#learnmore" target="_blank">About</Link>
                        </li>
                        <li className="text-base font-bold uppercase text-white hover:text-gray-300">
                            <Link href="https://bayview.com/careers/" target="_blank">Careers</Link>
                        </li>
                        <li className="text-base font-bold uppercase text-white hover:text-gray-300">
                            <Link href="https://bayview.com/#contact" target="_blank">Contact</Link>
                        </li>
                    </ul>
                </nav>                
        </div>
    </header>
  );
}