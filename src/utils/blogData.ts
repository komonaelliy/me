export interface BlogPost {
    date: string;
    category: string;
    title: string;
    preview: string;
    tags: string[];
    link: string;
  }
  
  export const blogPosts: BlogPost[] = [
    {
      date: '15 Mar',
      category: 'SEC',
      title: 'Breaking Down Buffer Overflows',
      preview: 'A deep dive into stack-based buffer overflows...',
      tags: ['exploit', 'binary'],
      link: '/posts/buffer-overflow'
    },
    {
      date: '10 Mar',
      category: 'CLOUD',
      title: 'AWS Security Misconfigurations',
      preview: 'Common AWS security issues...',
      tags: ['cloud', 'aws'],
      link: '/posts/aws-security'
    },
    {
      date: '20 Mar',
      category: 'AI',
      title: 'AI in Cybersecurity: A Double-Edged Sword',
      preview: 'Exploring how artificial intelligence is transforming the security landscape...',
      tags: ['AI', 'security', 'automation'],
      link: '/posts/ai-assistance'
    },
    {
      date: '25 Mar',
      category: 'NETWORK',
      title: 'Advanced Packet Analysis',
      preview: 'Deep dive into Wireshark and network forensics...',
      tags: ['networking', 'forensics', 'wireshark'],
      link: '/posts/packet-analysis'
    }
  ];
  