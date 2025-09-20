import { useEffect, useState } from 'react';
import { Testimonial } from '../../types/testimonial';

const Dashboard = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(res => res.json())
      .then(data => setTestimonials(data));
  }, []);

  const approve = (index: number) => {
    const updated = [...testimonials];
    updated[index].approved = true;
    setTestimonials(updated);
    // Optionally send update to backend
  };

  return (
    <div>
      <h2>Testimonial Dashboard</h2>
      {testimonials.map((t, i) => (
        <div key={i}>
          <p>{t.quote}</p>
          <button onClick={() => approve(i)}>Approve</button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
