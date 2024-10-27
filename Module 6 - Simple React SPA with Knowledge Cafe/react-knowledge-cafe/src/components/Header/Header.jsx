import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <header className='flex justify-between items-center py-2 border-b-2 max-w-7xl mx-auto'>
      <h1 className="text-4xl fond-bold">Knowledge Cafe</h1>
      <img src={profile} alt="Not available" />
    </header>
  );
};

export default Header;
