const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Developer Portfolio. Built with React, Vite, and Tailwind CSS.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  )
}

export default Footer
