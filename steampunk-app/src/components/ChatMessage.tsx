import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { UserRound } from "lucide-react";

interface Props {
  message: string;
  userIsAuthor?: boolean;
}

const ChatMessage = ({ message, userIsAuthor = false }: Props) => {
  return (
    <Card className="border-x-0 border-b-0 border-stone-700">
      <CardHeader className="flex flex-row items-center gap-4 pb-4">
        <Avatar>
          {userIsAuthor ? (
            <UserRound
              className="size-[2.5rem] stroke-stone-700"
              strokeWidth={1}
            />
          ) : (
            <AvatarImage src="/octavius-avatar.webp" alt="Octavius" />
          )}
        </Avatar>
        {userIsAuthor ? "You" : "Octavius"}
      </CardHeader>
      <CardDescription className="text-wrap px-4 pb-4 text-lg leading-5">
        {message}
      </CardDescription>
    </Card>
  );
};

export default ChatMessage;
