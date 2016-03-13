'use strict';

angular.module('app')
    .factory('trainingFactory', function($http, toastr) {
        return {
            addTraining: function(courseId, trainingLocation, training_start_date, training_end_date, timeStart, timeEnd, userId, regularFee, discountedFee) {
				return $http({
                    url: 'add_training',
                    method: 'POST',
					data: $.param ({
						course_id: courseId,
						"location": trainingLocation,
						start_date: training_start_date,
						end_date: training_end_date,
						time_start: timeStart,
						time_end: timeEnd,
						user_id: userId,
						regular_fee: regularFee,
						discounted_fee: discountedFee
					}),
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded'
					}
                }).success(function(response) {
                    return response;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.: ' + response, 'ERROR');
					console.error(response);
				});
            },
			/*updateTraining: function(trainingId, trainingLocation, training_start_date, training_end_date, timeStart, timeEnd, r_fee, d_fee) {
                return $http({
                    url: 'update_training',
                    method: 'POST',
					data: $.param ({
						training_id: trainingId,
						location: trainingLocation,
						date_start: training_start_date,
						date_end: training_end_date,
						time_start: timeStart,
						time_end: timeEnd,
						regular_fee: r_fee,
						discounted_fee: d_fee
						}),
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) {
                    return response;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            },*/
			updateCourse: function(courseId, courseName, courseCode) {
                return $http({
                    url: 'update_course',
                    method: 'POST',
					data: $.param ({
						course_name: courseName,
						course_code: courseCode,
						course_id: courseId}),
					headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function(response) {
                    return response;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            },
			courseList: function() {
                return $http({
                    url: 'course_list',
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
                });
            },
			checkId: function(trainingId) {
                return $http({
                    url: 'training_detail?training_id=' + trainingId,
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            },
			getTrainingsUsingCourseId: function(courseId) {
                return $http({
                    url: 'training_list_by_course?course_id=' + courseId,
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
			   });
            },
			getTrainings: function() {
                return $http({
                    url: 'trainings',
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            },
			getTrainingsByMonth: function(month) {
                return $http({
                    url: 'get_trainings_by_month?month=' + month,
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            },
			getAllParticipants: function() {
                return $http({
                    url: 'get_trainings_by_month?month=' + month,
                    method: 'GET'
                }).success(function(response) {
                    return response.data;
                }).error(function(response) {
                    toastr.error('An error occured. The server is not responding to the sent request. Please contact the system administrator.', 'ERROR');
					console.error(response);
				});
            }
        };
    });

	
	
	
	
	
	