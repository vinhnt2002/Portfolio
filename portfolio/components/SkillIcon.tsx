import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface SkillIconProps {
  icon: {
    name: string;
    imageSrc: string;
    content: string;
  };
}

export const SkillIcon: React.FC<SkillIconProps> = ({ icon }) => {
  const { name, imageSrc, content } = icon;
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">
          <div className="bg-white hover:ring hover:shadow-xl rounded-lg w-10 h-10 flex flex-wrap items-center justify-center">
            <Avatar className="w-8 h-8">
              <AvatarImage src={imageSrc} />
            </Avatar>
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={imageSrc} />
            <AvatarFallback>{name.charAt(1)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">{name}</h4>
            <p className="text-sm">{content}</p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};