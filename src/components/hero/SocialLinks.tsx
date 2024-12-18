import * as SimpleIcons from 'simple-icons';
import { agentConfig } from '@/config/agent';

export const SocialLinks = () => {
  return (
    <div className="flex pt-4 lg:pt-2 gap-4">
      {agentConfig.social.facebook && (
        <a
          href={agentConfig.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 border-2 border-transparent hover:border-primary focus:border-primary transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-primary group-hover:text-primary group-focus:text-primary transition-colors"
          >
            <path
              fill="currentColor"
              d={SimpleIcons.siFacebook.path}
            />
          </svg>
        </a>
      )}
      {agentConfig.social.instagram && (
        <a
          href={agentConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 border-2 border-transparent hover:border-primary focus:border-primary transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-primary group-hover:text-primary group-focus:text-primary transition-colors"
          >
            <path
              fill="currentColor"
              d={SimpleIcons.siInstagram.path}
            />
          </svg>
        </a>
      )}
      {agentConfig.social.twitter && (
        <a
          href={agentConfig.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 border-2 border-transparent hover:border-primary focus:border-primary transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-primary group-hover:text-primary group-focus:text-primary transition-colors"
          >
            <path
              fill="currentColor"
              d={SimpleIcons.siX.path}
            />
          </svg>
        </a>
      )}
      {agentConfig.social.linkedin && (
        <a
          href={agentConfig.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 border-2 border-transparent hover:border-primary focus:border-primary transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-primary group-hover:text-primary group-focus:text-primary transition-colors"
          >
            <path
              fill="currentColor"
              d={SimpleIcons.siLinkedin.path}
            />
          </svg>
        </a>
      )}
      {agentConfig.social.google && (
        <a
          href={agentConfig.social.google}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-primary/10 border-2 border-transparent hover:border-primary focus:border-primary transition-all duration-300 ease-in-out hover:scale-110 focus:scale-110 group"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="text-primary group-hover:text-primary group-focus:text-primary transition-colors"
          >
            <path
              fill="currentColor"
              d={SimpleIcons.siGoogle.path}
            />
          </svg>
        </a>
      )}
    </div>
  );
};