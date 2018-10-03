#include <unistd.h>

/* 
	This function works by creating a new set of auto variables each time and when the recursion collapses, the values are multiplied
*/

int power(int n, int x)
{
	int m;
	if (x == 0)
		return 1;
	if (x % 2)
		return n * (power(n, (x - 1)));
	else
	{
		m = power(n, x / 2);	
		return m * m;
	}
}


/*
	Uninitialized global and static variables are stored in the BSS
*/
static int i;
int j;

/*
	String literal stored in initialized data segment read-only area.
*/
const char *rdonly_string = "Hello World!"

/*
	Char array and int Stored in initialized data segment read-write area.
*/
char rdwr_string[] = "Hello World!"
int debug = 1;

int main()
{

	return (0);
}