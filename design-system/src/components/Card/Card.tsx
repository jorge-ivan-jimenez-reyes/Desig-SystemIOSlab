interface CardProps {
    title: string;
    description: string;
    href: string;
  }
  
  export default function Card({ title, description, href }: CardProps) {
    return (
      <a
        href={href}
        className="block p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
      >
        <h2 className="text-2xl font-semibold text-blue-400">{title}</h2>
        <p className="text-gray-400 mt-2">{description}</p>
      </a>
    );
  }
  