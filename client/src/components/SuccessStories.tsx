import { Star } from 'lucide-react';

const successStories = [
  {
    id: 1,
    quote: "Moving to Recruiterflow was an easy decision for our team! We were looking for an ATS that was easy to use and gave our team a way to automate and be more productive with our candidate process. With Recruiterflow's email sequences and search capabilities, we've built our pipeline faster. The team's helpfulness is also an icing on the cake!",
    author: "Amanda Christoff",
    position: "Founder & CEO, Bloom Talent",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b3df?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    quote: "We've been able to grow our executive search business multifold within a year of implementing Recruiterflow. The organization, visibility, integrations and automation has been instrumental in helping us accelerate our growth and achieve fantastic results. The support that we've received from the team has been nothing short of spectacular. To me, moving to Recruiterflow is a no brainer!",
    author: "Ken Eslick",
    position: "President, The Leaders Lab",
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

      {/* Simple Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {successStories.map((story) => (
          <div key={story.id} className="bg-white dark:bg-gray-800/50 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-start gap-6">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <img 
                  src={story.avatar} 
                  alt={story.author}
                  className="w-20 h-20 rounded-lg object-cover"
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