import { useQueryClient } from '@tanstack/react-query';
import FormSubmission from '../components/FormSubmission';
import useAddHero from '../features/heroes/hooks/useAddHero';
import useFetchHeroes from '../features/heroes/hooks/useFetchHeroes';

const HeroesPage = () => {
  const queryClient = useQueryClient();
  const { data: response, status } = useFetchHeroes();

  const { mutate: addHero } = useAddHero();

  if (status === 'error') return <p>Error =( from fetching Heroes</p>;
  return (
    <>
      <h1>Heroes Page</h1>
      <FormSubmission handleMutate={addHero} />
      {status === 'loading' ? (
        <h2>Loading.. Please wait..</h2>
      ) : (
        response?.data?.map(h => {
          return (
            <div key={h.id} className="flex items-center justify-between">
              <h1>
                <span>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</span>
              </h1>
            </div>
          );
        })
      )}
    </>
  );
};

export default HeroesPage;
