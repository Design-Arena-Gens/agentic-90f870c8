'use client'

import { useState, useMemo } from 'react'

interface AITalent {
  id: number
  name: string
  title: string
  company: string
  location: string
  experience: string
  specialization: string[]
  education: string
  recentWork: string
  linkedinUrl: string
}

const mockData: AITalent[] = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "ML Research Engineer",
    company: "OpenAI",
    location: "San Francisco, CA",
    experience: "2 years",
    specialization: ["Large Language Models", "Reinforcement Learning", "Neural Architecture Search"],
    education: "PhD Computer Science, Stanford University (2023)",
    recentWork: "Published paper on efficient transformer training at NeurIPS 2024",
    linkedinUrl: "https://linkedin.com/in/sarahchen-ai"
  },
  {
    id: 2,
    name: "Aditya Krishnan",
    title: "AI Research Scientist",
    company: "Google DeepMind",
    location: "London, UK",
    experience: "1.5 years",
    specialization: ["Computer Vision", "Generative AI", "Multi-modal Learning"],
    education: "PhD AI/ML, MIT (2023)",
    recentWork: "Developed novel diffusion model architecture for video generation",
    linkedinUrl: "https://linkedin.com/in/adityakrishnan"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Machine Learning Engineer",
    company: "Anthropic",
    location: "Remote (US)",
    experience: "1 year",
    specialization: ["Constitutional AI", "Safety Research", "Prompt Engineering"],
    education: "MS Computer Science, UC Berkeley (2023)",
    recentWork: "Contributing to Claude's safety alignment research",
    linkedinUrl: "https://linkedin.com/in/emilyrodriguez-ml"
  },
  {
    id: 4,
    name: "Marcus Johnson",
    title: "Deep Learning Researcher",
    company: "Meta AI",
    location: "Menlo Park, CA",
    experience: "2 years",
    specialization: ["Speech Recognition", "NLP", "Edge AI"],
    education: "PhD Electrical Engineering, Carnegie Mellon (2023)",
    recentWork: "Optimized on-device LLM inference for mobile applications",
    linkedinUrl: "https://linkedin.com/in/marcusjohnson-ai"
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    title: "AI Research Engineer",
    company: "Stability AI",
    location: "Tokyo, Japan",
    experience: "1.5 years",
    specialization: ["Diffusion Models", "Image Synthesis", "Model Compression"],
    education: "PhD Computer Vision, University of Tokyo (2023)",
    recentWork: "Developed efficient latent diffusion techniques for real-time generation",
    linkedinUrl: "https://linkedin.com/in/yukitanaka-ai"
  },
  {
    id: 6,
    name: "Priya Sharma",
    title: "ML Research Scientist",
    company: "Cohere",
    location: "Toronto, Canada",
    experience: "2 years",
    specialization: ["Retrieval Augmented Generation", "Embedding Models", "Information Retrieval"],
    education: "PhD NLP, University of Toronto (2023)",
    recentWork: "Designed state-of-the-art semantic search embeddings",
    linkedinUrl: "https://linkedin.com/in/priyasharma-ml"
  },
  {
    id: 7,
    name: "Alex Kim",
    title: "Applied AI Researcher",
    company: "Hugging Face",
    location: "New York, NY",
    experience: "1 year",
    specialization: ["Model Fine-tuning", "Transfer Learning", "Open Source AI"],
    education: "MS AI, Georgia Tech (2023)",
    recentWork: "Built efficient fine-tuning frameworks for large language models",
    linkedinUrl: "https://linkedin.com/in/alexkim-ai"
  },
  {
    id: 8,
    name: "Fatima Al-Rashid",
    title: "AI/ML Research Engineer",
    company: "Mistral AI",
    location: "Paris, France",
    experience: "1.5 years",
    specialization: ["Model Architecture", "Sparse Models", "Mixture of Experts"],
    education: "PhD Machine Learning, École Polytechnique (2023)",
    recentWork: "Contributed to Mixtral model architecture innovations",
    linkedinUrl: "https://linkedin.com/in/fatima-alrashid"
  },
  {
    id: 9,
    name: "David Okonkwo",
    title: "Machine Learning Researcher",
    company: "Microsoft Research",
    location: "Redmond, WA",
    experience: "2 years",
    specialization: ["Federated Learning", "Privacy-Preserving ML", "Healthcare AI"],
    education: "PhD Computer Science, Oxford (2023)",
    recentWork: "Developed privacy-preserving techniques for medical AI systems",
    linkedinUrl: "https://linkedin.com/in/davidokonkwo-ml"
  },
  {
    id: 10,
    name: "Sophia Martinez",
    title: "Deep Learning Engineer",
    company: "NVIDIA",
    location: "Santa Clara, CA",
    experience: "1 year",
    specialization: ["GPU Optimization", "Model Inference", "Distributed Training"],
    education: "MS Computer Engineering, Stanford (2024)",
    recentWork: "Optimized LLM inference on H100 GPUs achieving 2x speedup",
    linkedinUrl: "https://linkedin.com/in/sophiamartinez-dl"
  },
  {
    id: 11,
    name: "Rahul Mehta",
    title: "AI Research Scientist",
    company: "Apple",
    location: "Cupertino, CA",
    experience: "1.5 years",
    specialization: ["On-Device AI", "Neural Networks", "ML Frameworks"],
    education: "PhD AI, IIT Bombay & Stanford (2023)",
    recentWork: "Developed efficient neural network architectures for Apple Silicon",
    linkedinUrl: "https://linkedin.com/in/rahulmehta-ai"
  },
  {
    id: 12,
    name: "Isabella Costa",
    title: "ML Research Engineer",
    company: "Inflection AI",
    location: "Palo Alto, CA",
    experience: "1 year",
    specialization: ["Conversational AI", "Dialogue Systems", "Personalization"],
    education: "MS NLP, ETH Zurich (2023)",
    recentWork: "Built context-aware dialogue management systems",
    linkedinUrl: "https://linkedin.com/in/isabellacosta-ml"
  },
  {
    id: 13,
    name: "Jamal Williams",
    title: "Applied Research Scientist",
    company: "Amazon AGI",
    location: "Seattle, WA",
    experience: "2 years",
    specialization: ["Robotics AI", "Reinforcement Learning", "Multi-Agent Systems"],
    education: "PhD Robotics, MIT (2023)",
    recentWork: "Developed RL algorithms for warehouse automation robots",
    linkedinUrl: "https://linkedin.com/in/jamalwilliams-ai"
  },
  {
    id: 14,
    name: "Li Wei",
    title: "Machine Learning Researcher",
    company: "ByteDance AI Lab",
    location: "Beijing, China",
    experience: "1.5 years",
    specialization: ["Recommendation Systems", "Graph Neural Networks", "Real-time ML"],
    education: "PhD Computer Science, Tsinghua University (2023)",
    recentWork: "Improved recommendation algorithms using advanced GNN architectures",
    linkedinUrl: "https://linkedin.com/in/liwei-ml"
  },
  {
    id: 15,
    name: "Nina Petrov",
    title: "AI Research Engineer",
    company: "Waymo",
    location: "Mountain View, CA",
    experience: "1 year",
    specialization: ["Autonomous Driving", "Perception", "Sensor Fusion"],
    education: "PhD Autonomous Systems, Carnegie Mellon (2024)",
    recentWork: "Enhanced 3D object detection for self-driving vehicles",
    linkedinUrl: "https://linkedin.com/in/ninapetrov-ai"
  }
]

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedSpecialization, setSelectedSpecialization] = useState<string>('All')

  const allSpecializations = useMemo(() => {
    const specs = new Set<string>()
    mockData.forEach(person => {
      person.specialization.forEach(spec => specs.add(spec))
    })
    return ['All', ...Array.from(specs).sort()]
  }, [])

  const filteredData = useMemo(() => {
    return mockData.filter(person => {
      const matchesSearch = searchTerm === '' ||
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.specialization.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase())) ||
        person.recentWork.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesSpecialization = selectedSpecialization === 'All' ||
        person.specialization.includes(selectedSpecialization)

      return matchesSearch && matchesSpecialization
    })
  }, [searchTerm, selectedSpecialization])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Top Emerging AI Talent
          </h1>
          <p className="text-gray-600 mb-6">
            Discover the next generation of AI engineers and researchers making waves in the industry
          </p>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search by name, company, specialization, or recent work..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedSpecialization}
                onChange={(e) => setSelectedSpecialization(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
              >
                {allSpecializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            Showing {filteredData.length} of {mockData.length} professionals
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredData.map(person => (
            <div key={person.id} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-gray-900 mb-1">{person.name}</h2>
                  <p className="text-sm text-gray-600 mb-1">{person.title}</p>
                  <p className="text-sm font-semibold text-blue-600">{person.company}</p>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                  {person.experience}
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Location</p>
                  <p className="text-sm text-gray-700">{person.location}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Education</p>
                  <p className="text-sm text-gray-700">{person.education}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    {person.specialization.map((spec, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Recent Work</p>
                  <p className="text-sm text-gray-700 italic">{person.recentWork}</p>
                </div>
              </div>

              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                View LinkedIn Profile
              </a>
            </div>
          ))}
        </div>

        {filteredData.length === 0 && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No results found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </main>
  )
}
