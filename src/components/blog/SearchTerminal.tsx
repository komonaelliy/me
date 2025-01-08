interface SearchTerminalProps {
    onSearch: (term: string) => void;
  }
  
  export default function SearchTerminal({ onSearch }: SearchTerminalProps) {
    return (
      <div className="search-terminal">
        <div className="terminal-header">
          <span className="terminal-title">root@playerkomona:~# find /posts</span>
          <div className="terminal-buttons">
            <span className="minimize">─</span>
            <span className="maximize">□</span>
            <span className="close">×</span>
          </div>
        </div>
        <input 
          type="text" 
          placeholder="Search posts..." 
          className="terminal-input"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  }
  