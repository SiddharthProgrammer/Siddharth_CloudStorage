import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileCounts, setFileCounts] = useState({
    googleDrive: 0,
    oneDrive: 0,
    localDrive: 0,
  });

  useEffect(() => {
    const fetchFileCounts = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/files');
        const data = await response.json();

        const counts = data.reduce((acc, file) => {
          acc[file.storageType] = (acc[file.storageType] || 0) + 1;
          return acc;
        }, {});

        setFileCounts({
          googleDrive: counts.googleDrive || 0,
          oneDrive: counts.oneDrive || 0,
          localDrive: counts.localDrive || 0,
        });
      } catch (error) {
        console.error('Error fetching file counts:', error);
      }
    };

    fetchFileCounts();
  }, []);

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    navigate('/login');
  };

  const showLogoutModal = () => {
    setIsModalOpen(true);
  };

  const closeLogoutModal = () => {
    setIsModalOpen(false);
  };

  const goToFileManager = () => {
    navigate('/file-manager');
  };

  const goToFileUpload = () => {
    navigate('/file-upload');
  };

  return (
    <div style={styles.container}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h1 style={styles.navTitle}>CloudFlex MultiCloud Platform</h1>
        <div style={styles.navLinks}>
          <button style={styles.navButton} onClick={goToFileManager}>
            File Manager
          </button>
          <button style={styles.navButton} onClick={goToFileUpload}>
            Upload
          </button>
          <button style={styles.navButton} onClick={showLogoutModal}>
            Logout
          </button>
        </div>
      </nav>

      {/* Content Container */}
      <div style={styles.contentContainer}>
        <div style={styles.profileTeamContainer}>
          <div style={styles.profileContainer}>
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Profile"
              style={styles.profileImage}
            />
            <div style={styles.profileInfo}>
              <h2 style={styles.userName}>Siddharth</h2>
              <p style={styles.userEmail}>siddharthofficialmain@gmail.com</p>
            </div>
          </div>

          <div style={styles.teamMembersContainer}>
  <h3 style={styles.teamMembersTitle}>Storage</h3>
  <div style={styles.storageCardsContainer}>
    {/* Google Drive Card */}
    <motion.div
   
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0 }}
  >
    <div style={{ ...styles.storageCard, ...styles.googleDriveCard }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RaendkWxwbnlsA8UyDPmcDbqIMQETxKYpw&s"
        alt="Google Drive"
        style={styles.storageCardIcon}
      />
      <h4 style={styles.storageCardTitle}>Google Drive</h4>
      <p style={styles.storageCardCount}>{fileCounts.googleDrive} files</p>
    </div>
</motion.div>
    {/* OneDrive Card */}
    <motion.div
   
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <div style={{ ...styles.storageCard, ...styles.oneDriveCard }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jYVz1ZKfVUO91XTBxkjxEZ2b6xJz7RG1lA&s"
        alt="OneDrive"
        style={styles.storageCardIcon}
      />
      <h4 style={styles.storageCardTitle}>One Drive</h4>
      <p style={styles.storageCardCount}>{fileCounts.oneDrive} files</p>
    </div>
</motion.div>
    {/* Local Drive Card */}
    <motion.div
    
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <div style={{ ...styles.storageCard, ...styles.localDriveCard }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgy9orjmKFT5i4Le7JsoehLKWL6C_kbdSYEw&s"
        alt="Local Drive"
        style={styles.storageCardIcon}
      />
      <h4 style={styles.storageCardTitle}>Local Drive</h4>
      <p style={styles.storageCardCount}>{fileCounts.localDrive} files</p>
    </div>
    </motion.div>
  </div>
  
</div>
        </div>

        {/* CloudFlex MultiCloud Platform */}
        <div style={styles.cloudFlexContainer}>
          <div style={styles.cloudFlexTitle}>CloudFlex MultiCloud Platform</div>
          <p>Explore the power of CloudFlex MultiCloud Platform</p>
        </div>

        {/* Features and File Actions */}
        <div style={styles.cardsContainer}>
          <motion.div
            style={styles.card}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h4 style={styles.cardTitle}>Cloud Storage Integration</h4>
            <p>Handle multiple cloud storage APIs.</p>
          </motion.div>
          <motion.div
            style={styles.card}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 style={styles.cardTitle}>File Management</h4>
            <p>View, upload, and delete files.</p>
          </motion.div>
          <motion.div
            style={styles.card}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 style={styles.cardTitle}>Unified Platform</h4>
            <p>Manage cloud storage from one app.</p>
          </motion.div>
        </div>

        {/* File Manager and Upload Cards */}
        <div style={styles.cardsContainer}>
          <div style={styles.roundCard} onClick={goToFileManager}>
            <h4 style={styles.cardTitle}>📁 File Manager</h4>
          </div>
          <div style={styles.roundCard} onClick={goToFileUpload}>
            <h4 style={styles.cardTitle}>⬆️ Upload a File</h4>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <h2>Logout?</h2>
            <button style={styles.modalButton} onClick={handleLogout}>
              Yes, Logout
            </button>
            <button style={styles.modalButton} onClick={closeLogoutModal}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer style={styles.footer}>
        <p>Infosys Springboard Internship 2024-2025 | Contact: dummy | Email: dummy</p>
      </footer>
    </div>
  );
};



const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundImage:
      'url("/static/home.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    paddingBottom: '80px',
    position: 'relative',  // Changed from fixed to relative
    width: '100%',
    height: '100vh',  // Ensure the container takes full height
    marginTop: '60px', // Adjusted to add space below navbar
    right: 0,
    overflowY: 'auto',  // Allow scrolling if content overflows
  },
  navbar: {
    width: '100%',
    padding: '5px 20px', // Reduced padding for a smaller topbar
    backgroundColor: 'rgba(0, 0, 0, 0.86)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 20,  // Ensure navbar is always on top
    height: '50px',  // Adjusted height
  },
  navTitle: {
    fontSize: '1.2rem',  // Adjusted font size
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '10px',
    marginRight: '50px',
  },
  navButton: {
    padding: '8px 18px', // Reduced button size for smaller navbar
    fontSize: '0.9rem',  // Adjusted font size
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s',
    zIndex: 30,  // Ensure the buttons are above other content
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',  // Centered content
    justifyContent: 'flex-start',
    width: '100%',
    padding: '20px',
    marginTop: '10px',  // Adjust space for the smaller navbar
  },
  profileTeamContainer: {
    display: 'flex',
    justifyContent: 'space-between',  // Profile and Team Members side by side
    width: '100%',
    maxWidth: '1000px',
    marginBottom: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'center',  // Center profile
    alignItems: 'center',
    marginRight: '30px',  // Add space between profile and team members
  },
  profileImage: {
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    marginRight: '15px',
  },
  profileInfo: {
    textAlign: 'left',
    color: '#333',  // Consistent text color
  },
  userName: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: '1rem',
  },
  teamMembersContainer: {
    textAlign: 'center',
    color: '#333',  // Consistent text color
  },
  teamMembersTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  teamMembersList: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '1rem',
  },
  cloudFlexContainer: {
    textAlign: 'center',
    color: '#333',  // Consistent text color
    width: '100%',
    maxWidth: '1000px',
    marginTop: '20px',
    background: 'rgba(255, 255, 255, 0.8)',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
  },
  cloudFlexTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
    width: '100%',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    width: 'calc(33% - 20px)',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#000',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  roundCard: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '20px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    width: '200px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#000',
  },
  modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,  // Ensure the modal is on top of everything
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    color: 'black',
  },
  modalButton: {
    padding: '8px 15px',
    fontSize: '1rem',
    margin: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'transform 0.3s, background-color 0.3s',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    width: '100%',
    padding: '5px 20px', // Reduced padding for a smaller footer
    position: 'fixed',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: 5,  // Lower zIndex for footer, so it's under the content
    height: '40px',  // Adjusted height
  },

  
    storageCardsContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      marginTop: '20px',
      marginRight: '50px',
      gap: '50px',
    },
    storageCard: {
      width: '100%',
      padding: '15px',
      borderRadius: '10px',
      textAlign: 'center',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    storageCardIcon: {
      width: '50px',
      height: '50px',
      marginBottom: '10px',
    },
    storageCardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '5px',
    },
    storageCardCount: {
      fontSize: '16px',
      color: '#555',
    },
    googleDriveCard: {
      backgroundColor: '#F4F9FC',
      color: '#4285F4',
      border: '2px solid #4285F4',
    },
    oneDriveCard: {
      backgroundColor: '#F1F6FF',
      color: '#0078D4',
      border: '2px solid #0078D4',
    },
    localDriveCard: {
      backgroundColor: '#FFF5F3',
      color: '#F28B3B',
      border: '2px solid #F28B3B',
    },
    storageCardHover: {
      transform: 'scale(1.05)',
    },

  

};



export default HomePage;
