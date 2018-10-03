#include <stdio.h>
#include <stdlib.h>
#include <pthread.h>
#include <assert.h>
pthread_mutex_t mutex;
#define MAX_THREADS 5

void *perform_work(void *arg)
{
	
	
	pthread_mutex_lock(&mutex);
	int arg_value = *((int *) arg);
	printf("Current thread value: %d\n", arg_value);
	pthread_mutex_unlock(&mutex);

	return NULL;
}

int main(void)
{
	pthread_t threads[MAX_THREADS];
	int thread_args[MAX_THREADS];
	int result_code;
	unsigned i;

	for (i = 0; i < MAX_THREADS; i++)
	{
		thread_args[i] = i;
		printf("Creating thread: %d\n", i);
		result_code = pthread_create(&threads[i], NULL, perform_work, &thread_args[i]);
		assert(!result_code);
	}

	for (i = 0; i < MAX_THREADS; i++){
		result_code = pthread_join(threads[i], NULL);
		assert(!result_code);
		printf("Thread %d has completed\n", i);
	}

	printf("All threads completed\n");
	return (0);
}