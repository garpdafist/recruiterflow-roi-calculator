import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const successStories = [
  {
    id: 1,
    quote: "Recruiterflow gives our entire team a way to work together and deliver a fantastic experience to our clients and candidates. After moving to Recruiterflow, our collaboration has improved multifold, we have a clear idea of our search progress. We are now able to deliver better results with increased collaboration and...",
    author: "Claudio Menezes",
    position: "Managing Partner, Damia Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "With Recruiterflow, I am able to easily source candidates and engage them with email sequences/campaigns that are personalized. The time savings that the campaigns provide is truly massive. It helps me start more conversations with passive candidates and keep them engaged. I have strong pipeline...",
    author: "Nolan Greenberg", 
    position: "Founder & CEO, Worth Search",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  }
];

export default function SuccessStories() {
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="heading text-3xl text-secondary mb-4">
          What our customers are saying
        </h3>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          1000+ recruiting firms all over the world trust Recruiterflow to help them run and scale their business
        </p>
      </div>

      {/* Success Stories Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {successStories.map((story) => (
          <div key={story.id} className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-sm">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={story.avatar} 
                  alt={story.author}
                  className="w-24 h-24 rounded-lg object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                {/* Quote */}
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 text-base">
                  {story.quote}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center">
                  <div className="flex items-center text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="fill-current" size={16} />
                    ))}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {story.author}
                    </div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">
                      {story.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}