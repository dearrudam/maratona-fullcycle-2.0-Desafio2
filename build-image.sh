docker build -t dearrudam/$(grep "maratona-fullcycle" package.json | sed 's/name//g' | sed -E 's/(\:|"|,|\s)//g'):latest .