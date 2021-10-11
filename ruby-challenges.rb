# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def newBev (array, letter)
    array.select { |value| value.include?(letter)}
end

p newBev(beverages_array, letter_o)
p newBev(beverages_array, letter_t)


# -------------------2) Create a method that takes in an array of numbers and returns the sum of the numbers. Use the test variables provided.

nums_array1 = [42, 7, 27]
# Expected output: 76

nums_array2 = [25, 17, 47, 11]
# Expected output: 100

def sumArr (array)
    array.sum
end

puts sumArr(nums_array1)
puts sumArr(nums_array2)



# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels='2', current_speed='0')
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end
end

trek = Bike.new('Trek Bike')
trek.bike_info
trek2 = Bike.new('New Bike', '3', '10')
trek2.bike_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(10) => 20
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(model, wheels=2, current_speed=0)
        @model = model
        @wheels = wheels
        @current_speed = current_speed
    end

    def bike_info
        p "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
    end

    def pedal_faster(inc_speed)
        @current_speed += inc_speed

    end 

    def brake(dec_speed)
        if dec_speed > @current_speed
            @current_speed = 0
        else 
            @current_speed -= dec_speed
        end
    end
end

trek = Bike.new('Trek Bike')
trek.bike_info
trek.pedal_faster(50)
trek.bike_info
trek.brake(30)
trek.bike_info
