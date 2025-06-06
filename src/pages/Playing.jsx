import React, { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { gameConfig } from "../components/atoms";
import { Link } from "react-router";
import { ModalAlone, ModalMorePlayers, Logo, MenuPlaying } from "../components";
import { PrimaryButton, SecondaryButton, CardFlip } from "../components/styled";
import { css } from "@emotion/react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  BeakerIcon,
  BugAntIcon,
  BuildingOffice2Icon,
  CakeIcon,
  CameraIcon,
  CloudIcon,
  CreditCardIcon,
  CubeIcon,
  FaceSmileIcon,
  FireIcon,
  GiftIcon,
  GlobeAmericasIcon,
  HandRaisedIcon,
  KeyIcon,
  MegaphoneIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";

export default function Playing() {
  const [{ themeAtom, numberPlayersAtom, gridSizeAtom }] = useAtom(gameConfig);
  const [gameCards, setGameCards] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [scores, setScores] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [moves, setMoves] = useState(0);

  // Array de objetos com número e ícones específicos
  const memoryCards = [
    {
      id: 1,
      number: 1,
      icon: <AcademicCapIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 2,
      number: 2,
      icon: <BanknotesIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 3,
      number: 3,
      icon: <BeakerIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 4,
      number: 4,
      icon: <BugAntIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 5,
      number: 5,
      icon: <BuildingOffice2Icon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 6,
      number: 6,
      icon: <CakeIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 7,
      number: 7,
      icon: <CameraIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 8,
      number: 8,
      icon: <CloudIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 9,
      number: 9,
      icon: <CreditCardIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 10,
      number: 10,
      icon: <FaceSmileIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 11,
      number: 11,
      icon: <FireIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 12,
      number: 12,
      icon: <GiftIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 13,
      number: 13,
      icon: <GlobeAmericasIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 14,
      number: 14,
      icon: <HandRaisedIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 15,
      number: 15,
      icon: <KeyIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 16,
      number: 16,
      icon: <MegaphoneIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 17,
      number: 17,
      icon: <MicrophoneIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
    {
      id: 18,
      number: 18,
      icon: <CubeIcon width={64} height={64} />,
      flipped: false,
      matched: false,
    },
  ];

  useEffect(() => {
    initializeGame();
  }, [themeAtom, gridSizeAtom, numberPlayersAtom]);

  // Verificar se o jogo acabou
  useEffect(() => {
    if (gameCards.length > 0 && gameCards.every((card) => card.matched)) {
      setGameOver(true);
      setIsModalOpen(true);
    }
  }, [gameCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) {
        setTimeElapsed((prevTime) => prevTime + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Inicializar o jogo
  const initializeGame = () => {
    // Inicializar pontuações para todos os jogadores
    const playerCount = parseInt(numberPlayersAtom) || 1;
    setScores(Array(playerCount).fill(0));
    setCurrentPlayer(0);
    setGameOver(false);
    setIsModalOpen(false);
    setTimeElapsed(0);
    setMoves(0);

    // Gerar cartas do jogo
    setGameCards(getGameCards());
  };

  // Função para duplicar e embaralhar o array para o jogo de memória
  const getGameCards = () => {
    // Determine o número de pares com base no tamanho da grade
    const numPairs = gridSizeAtom === "4" ? 8 : 18;

    // Selecione apenas os pares necessários
    const selectedCards = memoryCards.slice(0, numPairs);

    // Duplique cada carta para criar pares
    let gameDeck = [
      ...selectedCards,
      ...selectedCards.map((card) => ({ ...card, id: card.id + 100 })),
    ];

    // Embaralhe o deck
    return gameDeck.sort(() => Math.random() - 0.5);
  };

  // Função para virar uma carta
  const flipCard = (id) => {
    if (parseInt(numberPlayersAtom) === 1) {
      setMoves((prevMoves) => prevMoves + 1);
      console.log("moves", moves);
    }
    setGameCards((prevCards) => {
      // Encontre quantas cartas já estão viradas, mas não correspondem
      const flippedCards = prevCards.filter(
        (card) => card.flipped && !card.matched,
      );

      // Se já houver duas cartas viradas, não permita virar outra
      if (flippedCards.length >= 2) return prevCards;

      // Caso contrário, vire a carta selecionada
      const newCards = prevCards.map((card) =>
        card.id === id ? { ...card, flipped: true } : card,
      );

      // Verifique correspondências após virar
      const newFlippedCards = newCards.filter(
        (card) => card.flipped && !card.matched,
      );

      // Se houver duas cartas viradas, verifique se correspondem
      if (newFlippedCards.length === 2) {
        // Verifique após um breve atraso
        setTimeout(() => {
          checkForMatch();
        }, 1000);
      }

      return newCards;
    });
  };

  // Verificar se as cartas viradas correspondem
  const checkForMatch = () => {
    setGameCards((prevCards) => {
      const flippedCards = prevCards.filter(
        (card) => card.flipped && !card.matched,
      );

      // Se houver duas cartas viradas
      if (flippedCards.length === 2) {
        const [card1, card2] = flippedCards;
        const isMatch = card1.number === card2.number;

        // Se for uma correspondência, marque como correspondida e mantenha virada
        if (isMatch) {
          // Atualize a pontuação do jogador atual
          setScores((prevScores) => {
            const newScores = [...prevScores];
            newScores[currentPlayer] += 1;
            return newScores;
          });

          return prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, matched: true }
              : card,
          );
        } else {
          // Se não corresponder, vire as cartas de volta e passe para o próximo jogador
          setCurrentPlayer(
            (prev) => (prev + 1) % parseInt(numberPlayersAtom || 1),
          );

          return prevCards.map((card) =>
            card.id === card1.id || card.id === card2.id
              ? { ...card, flipped: false }
              : card,
          );
        }
      }

      return prevCards;
    });
  };

  // Reiniciar o jogo
  const restartGame = () => {
    initializeGame();
  };

  return (
    <main
      css={(theme) => css`
        display: flex;
        flex-direction: column;
        padding: ${theme.spacing.xxl};
        @media (max-width: 600px) {
          padding: ${theme.spacing.xs};
        }
      `}
    >
      <header
        css={(theme) => css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1100px;
          width: 100%;
          min-width: 300px;
          margin: 0 auto;
          padding: ${theme.spacing.md} 0;
        `}
      >
        <Logo />
        <div
          css={css`
            display: flex;
            gap: 1rem;
            align-items: center;
            @media (max-width: 600px) {
              display: none;
            }
          `}
        >
          <PrimaryButton onClick={restartGame}>Restart</PrimaryButton>
          <Link
            to="/"
            css={css`
              width: 100%;
              min-width: 248px;
            `}
          >
            <SecondaryButton>New Game</SecondaryButton>
          </Link>
        </div>
        <MenuPlaying onRestartGame={restartGame} />
      </header>

      <div
        css={css`
          width: 100%;
          max-width: 600px;
          min-width: 300px;
          margin: 0 auto;
          @media (max-width: 400px) {
            max-width: 300px;
          }
        `}
      >
        <div
          css={(theme) => css`
            flex: 1;
            display: grid;
            grid-template-columns: repeat(${gridSizeAtom === "4" ? 4 : 6}, 1fr);
            grid-gap: ${theme.spacing.md};
            margin-top: ${theme.spacing.xl};
            margin-bottom: ${theme.spacing.xl};
          `}
        >
          {gameCards.map((card) => (
            <CardFlip
              key={card.id}
              onClick={() =>
                !card.flipped && !card.matched && flipCard(card.id)
              }
              card={card}
            >
              {(card.flipped || card.matched) &&
                (themeAtom === "numbers" ? card.number : card.icon)}
            </CardFlip>
          ))}
        </div>
      </div>

      <div
        css={(theme) => css`
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 1100px;
          width: 100%;
          min-width: 300px;
          margin: 0 auto;
          margin-top: ${theme.spacing.xl};
          @media (max-width: 600px) {
            gap: 0.2rem;
            flex-wrap: nowrap;
          }
        `}
      >
        {parseInt(numberPlayersAtom) === 1 ? (
          <div
            css={(theme) => css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 1rem;
              & div {
                display: flex;
                justify-content: space-between;
                gap: 1rem;
                padding: ${theme.spacing.md} ${theme.spacing.xs};
                background-color: #dfe7ec;
                border-radius: ${theme.borderRadius.medium};
                min-width: 180px;
                text-align: center;
                color: ${theme.colors.common.white};
                transition: all 0.3s ease;
                & span {
                  width: 50%;
                }
              }
            `}
          >
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <span
                css={(theme) => css`
                  font-weight: bold;
                  color: ${theme.colors.secondary.dark};
                `}
              >
                Time
              </span>
              <span
                css={(theme) => css`
                  font-weight: bold;
                  font-size: 1.5rem;
                  color: ${theme.colors.primary.dark};
                `}
              >
                {Math.floor(timeElapsed / 60)}:
                {String(timeElapsed % 60).padStart(2, "0")}
              </span>
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <span
                css={(theme) => css`
                  font-weight: bold;
                  color: ${theme.colors.secondary.dark};
                `}
              >
                Moves
              </span>
              <span
                css={(theme) => css`
                  font-weight: bold;
                  font-size: 1.5rem;
                  color: ${theme.colors.primary.dark};
                `}
              >
                {moves}
              </span>
            </div>
          </div>
        ) : (
          [...Array(parseInt(numberPlayersAtom) || 1)].map((_, index) => (
            <div
              key={index}
              css={css`
                display: flex;
                flex-direction: column;
                align-items: center;
              `}
            >
              <div
                css={(theme) => css`
                  padding: ${theme.spacing.md};
                  background-color: ${currentPlayer === index
                    ? theme.colors.primary.main
                    : theme.colors.primary.light};
                  border-radius: ${theme.borderRadius.medium};
                  min-width: 180px;
                  text-align: center;
                  color: ${currentPlayer === index
                    ? theme.colors.common.white
                    : theme.colors.text.primary};
                  transition: all 0.3s ease;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  position: relative;
                  ${currentPlayer === index
                    ? `&:before {
                  content: "";
                  width: 0;
									height: 0;
									border-left: 30px solid transparent;
									border-right: 30px solid transparent;
									border-bottom: 24px solid ${theme.colors.primary.main};
                  position: absolute;
                  top: -10px;
                  left: 50%;
                  transform: translateX(-50%);
                }`
                    : ""}
                  @media (max-width: 600px) {
                    min-width: 70px;
                    flex-direction: column;
                  }
                `}
              >
                <p
                  css={css`
                    margin: 0;
                    font-weight: bold;
                  `}
                >
                  <span
                    css={css`
                      @media (max-width: 600px) {
                        display: none;
                      }
                    `}
                  >
                    Player
                  </span>
                  <span
                    css={css`
                      @media (min-width: 601px) {
                        display: none;
                      }
                    `}
                  >
                    P
                  </span>
                  {index + 1}
                </p>
                <p
                  css={css`
                    margin: 0;
                    font-size: 1.5rem;
                    font-weight: bold;
                  `}
                >
                  {scores[index] || 0}
                </p>
              </div>
              {currentPlayer === index && (
                <div
                  css={css`
                    text-transform: uppercase;
                    font-weight: bold;
                    font-size: 1rem;
                    margin-top: 1rem;
                    @media (max-width: 600px) {
                      font-size: 0.6rem;
                    }
                  `}
                >
                  Current Turn
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {gameOver && numberPlayersAtom === "1" && isModalOpen && (
        <ModalAlone
          onRestart={restartGame}
          moves={moves}
          timeElapsed={timeElapsed}
        />
      )}

      {gameOver && numberPlayersAtom !== "1" && isModalOpen && (
        <ModalMorePlayers onRestart={restartGame} scores={scores} />
      )}
    </main>
  );
}
