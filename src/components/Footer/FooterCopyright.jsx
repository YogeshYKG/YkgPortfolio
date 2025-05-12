const FooterCopyright = () => {
  return (
    <div className="flex items-center justify-between pt-10 mb-8 ">
      <a href="/" className="logo reveal-up">
        <img src={"/images/Logo.svg"} width={80} height={80} alt="Logo" />
      </a>

      <p className="text-zinc-500 text-sm reveal-up">
        &copy; 2024 <span className="text-zinc-200">YogeshYKG</span>
      </p>
    </div>
  );
};

export default FooterCopyright;
