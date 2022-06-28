export interface Comment {
    userText: string;
    author: string;
  }
  
  export interface CardProps {
    name: string;
    author: string;
    description: string;
    comment: Comment[];
  }
  
  export interface BoardItem {
    id: number;
    columnName: string;
    isCardAdding: boolean;
    cards: CardProps[];
  }
  
  export interface Board {
    [key: string]: BoardItem;
  }
  
  export const boardState: Board = {
    0: {
      id: 0,
      columnName: "TODO",
      isCardAdding: false,
      cards: [
        {
          name: "demo card",
          author: "Klestov Vladislav",
          description: "card have added for demonstration",
          comment: [
            {
              userText: "my comment",
              author: "Klestov Vladislav",
            },
          ],
        },
      ],
    },
    1: {
      id: 1,
      columnName: "In Progresis",
      isCardAdding: false,
      cards: [
        {
          name: "my card",
          author: "Alex Savkin",
          description: "good luck! You will succeed, I believe in you!",
          comment: [
            {
              userText: "my comment",
              author: "Alex Savkin",
            },
          ],
        },
        
      ],
    },
    2: {
      id: 2,
      columnName: "Testing",
      isCardAdding: false,
      cards: [],
    },
    3: {
      id: 3,
      columnName: "Done",
      isCardAdding: false,
      cards: [],
    },
  };
  